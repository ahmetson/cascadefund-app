import { exists, create } from '../chunks/db_DOR0BHwy.mjs';
import { s as sleep } from '../chunks/utils_CRaJ9uIg.mjs';
export { renderers } from '../renderers.mjs';

async function isWishlisted(email) {
  return await exists("wishlist", { email });
}
async function joinWishlist(email) {
  return await create("wishlist", { email, time: Date.now() });
}

const secretKey = undefined                                    ;
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
async function handleJoinWishlist(params) {
  if (!params.recaptchaToken) {
    throw {
      code: -32602,
      message: "Invalid params",
      data: "Recaptcha token is required"
    };
  }
  let result;
  try {
    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body: JSON.stringify({
        secret: secretKey,
        response: params.recaptchaToken
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    result = await response.json();
  } catch (error) {
    console.error("Error verifying recaptcha token", error);
    throw {
      code: -32602,
      message: "Invalid params",
      data: "Error verifying recaptcha token"
    };
  }
  if (!result.success) {
    console.log("Invalid token:", result["error-codes"]);
    throw {
      code: -32602,
      message: "Invalid params",
      data: result["error-codes"].join(", ")
    };
  }
  console.log(`Bot protection was successful, join to wishlist`);
  return await handleJoinWishlistUnsafe(params);
}
async function handleJoinWishlistUnsafe(params) {
  if (!params.email) {
    throw {
      code: -32602,
      message: "Invalid params",
      data: "Email parameter is required"
    };
  }
  if (!validateEmail(params.email)) {
    throw {
      code: -32602,
      message: "Invalid params",
      data: "Invalid email format"
    };
  }
  if (!params.action) {
    throw {
      code: -32602,
      message: "Invalid params",
      data: "Recaptcha action is required"
    };
  }
  const wishlisted = await isWishlisted(params.email);
  if (wishlisted) {
    throw {
      code: -32603,
      message: "Duplicate request",
      data: "Email already in wishlist"
    };
  }
  const success = await joinWishlist(params.email);
  if (!success) {
    throw {
      code: -32603,
      message: "Internal error",
      data: "Failed to join wishlist"
    };
  }
  return {
    success: true,
    message: "Successfully joined wishlist"
  };
}
async function handleUpdateProjectVersionStatus(params) {
  if (!params.projectId) {
    throw {
      code: -32602,
      message: "Invalid params",
      data: "projectId is required"
    };
  }
  if (!params.currentStatus) {
    throw {
      code: -32602,
      message: "Invalid params",
      data: "currentStatus is required"
    };
  }
  await sleep(1e3);
  let newStatus;
  switch (params.currentStatus) {
    case "complete":
      newStatus = "testing";
      break;
    case "testing":
      newStatus = "release";
      break;
    case "release":
      newStatus = "release";
      break;
    case "archived":
      newStatus = "archived";
      break;
    default:
      throw {
        code: -32602,
        message: "Invalid params",
        data: "Invalid currentStatus value"
      };
  }
  const completedIssues = params.completedIssues ?? 0;
  const testedIssues = params.testedIssues ?? 0;
  const totalIssues = params.totalIssues ?? 0;
  return {
    status: newStatus,
    completedIssues,
    testedIssues,
    totalIssues
  };
}
async function handleRevertPatch(params) {
  if (!params.projectId) {
    throw {
      code: -32602,
      message: "Invalid params",
      data: "projectId is required"
    };
  }
  if (!params.version) {
    throw {
      code: -32602,
      message: "Invalid params",
      data: "version is required"
    };
  }
  if (!params.issueId) {
    throw {
      code: -32602,
      message: "Invalid params",
      data: "issueId is required"
    };
  }
  await sleep(1e3);
  return {
    success: true,
    message: "Patch reverted successfully"
  };
}
const POST = async ({ request }) => {
  console.log("api-json POST request");
  try {
    const body = await request.json();
    if (body.jsonrpc !== "2.0") {
      return new Response(
        JSON.stringify({
          jsonrpc: "2.0",
          error: {
            code: -32600,
            message: "Invalid Request",
            data: 'jsonrpc must be "2.0"'
          },
          id: body.id ?? null
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }
    if (!body.method) {
      return new Response(
        JSON.stringify({
          jsonrpc: "2.0",
          error: {
            code: -32600,
            message: "Invalid Request",
            data: "method is required"
          },
          id: body.id ?? null
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }
    let result;
    switch (body.method) {
      case "joinwishlist-unsafe":
        try {
          result = await handleJoinWishlistUnsafe(body.params);
        } catch (error) {
          return new Response(
            JSON.stringify({
              jsonrpc: "2.0",
              error: {
                code: error.code || -32603,
                message: error.message || "Internal error",
                data: error.data
              },
              id: body.id ?? null
            }),
            {
              status: 200,
              // JSON-RPC errors still return 200
              headers: {
                "Content-Type": "application/json"
              }
            }
          );
        }
        break;
      case "joinwishlist":
        try {
          result = await handleJoinWishlist(body.params);
        } catch (error) {
          return new Response(
            JSON.stringify({
              jsonrpc: "2.0",
              error: {
                code: error.code || -32603,
                message: error.message || "Internal error",
                data: error.data
              },
              id: body.id ?? null
            }),
            {
              status: 200,
              // JSON-RPC errors still return 200
              headers: {
                "Content-Type": "application/json"
              }
            }
          );
        }
        break;
      case "updateProjectVersionStatus":
        try {
          result = await handleUpdateProjectVersionStatus(body.params);
        } catch (error) {
          return new Response(
            JSON.stringify({
              jsonrpc: "2.0",
              error: {
                code: error.code || -32603,
                message: error.message || "Internal error",
                data: error.data
              },
              id: body.id ?? null
            }),
            {
              status: 200,
              // JSON-RPC errors still return 200
              headers: {
                "Content-Type": "application/json"
              }
            }
          );
        }
        break;
      case "revert-patch":
        try {
          result = await handleRevertPatch(body.params);
        } catch (error) {
          return new Response(
            JSON.stringify({
              jsonrpc: "2.0",
              error: {
                code: error.code || -32603,
                message: error.message || "Internal error",
                data: error.data
              },
              id: body.id ?? null
            }),
            {
              status: 200,
              // JSON-RPC errors still return 200
              headers: {
                "Content-Type": "application/json"
              }
            }
          );
        }
        break;
      default:
        return new Response(
          JSON.stringify({
            jsonrpc: "2.0",
            error: {
              code: -32601,
              message: "Method not found",
              data: `Method "${body.method}" is not supported`
            },
            id: body.id ?? null
          }),
          {
            status: 200,
            headers: {
              "Content-Type": "application/json"
            }
          }
        );
    }
    return new Response(
      JSON.stringify({
        jsonrpc: "2.0",
        result,
        id: body.id ?? null
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        jsonrpc: "2.0",
        error: {
          code: -32700,
          message: "Parse error",
          data: error.message || "Invalid JSON"
        },
        id: null
      }),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
