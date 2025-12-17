import { i as createComponent, j as createAstro, w as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_WCbI3U70.mjs';
import { $ as $$GalaxyLayout } from '../chunks/GalaxyLayout_CLlRJKZN.mjs';
import { M as MenuName } from '../chunks/BrowseTracker_CjQaYJF4.mjs';
import { B as BackButton } from '../chunks/BackButton_Cbeg5yyk.mjs';
import { a as mockContestData } from '../chunks/mock-data_BzTrmzbT.mjs';
import { c as createGalaxy, b as getAllGalaxies, g as getGalaxyById } from '../chunks/galaxy_D015Gxde.mjs';
import { ObjectId } from 'mongodb';
import { Wallet } from 'ethers';
import { getCollection } from '../chunks/db_DOR0BHwy.mjs';
import { getOrCreateUserByEmail, getUserByEmail } from '../chunks/user_Dmvk2cKy.mjs';
import { g as getOrCreateProject, a as getProjectById } from '../chunks/project_T6up3nk6.mjs';
import { send } from '@ara-web/crypto-sockets';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const initialGalaxies = [
  {
    name: "Hyperpayment",
    description: "A protocol and its implementation to transfer a resource between arbitrary amount parties. Used for example in Ara to distribute donations",
    stars: 0,
    sunshines: 0,
    users: 0,
    donationAmount: 0,
    x: 1300,
    y: 100,
    tags: ["Payment", "Protocol", "Blockchain", "Solidity", "P2P"]
  },
  {
    name: "Reflect",
    description: "A modern reflection library for TypeScript and JavaScript",
    stars: 0,
    sunshines: 0,
    users: 0,
    donationAmount: 0,
    x: 1200,
    y: 400,
    tags: ["TypeScript", "JavaScript", "Library", "Reflection", "Meta"]
  },
  {
    name: "Ara App",
    description: "The frontend application for Ara platform",
    stars: 0,
    sunshines: 0,
    users: 0,
    donationAmount: 0,
    x: 400,
    y: 200,
    tags: ["Frontend", "React", "Astro", "Web3", "Open Source"]
  },
  {
    name: "Blockchain Verification Tool",
    description: "An open-source tool for verifying software components on the blockchain",
    stars: 0,
    sunshines: 0,
    users: 0,
    donationAmount: 0,
    x: 1e3,
    y: 600,
    tags: ["Blockchain", "Verification", "Security", "Tool", "Ethereum"]
  },
  {
    name: "Galaxy Engine",
    description: "A rendering engine for creating beautiful galaxy visualizations",
    stars: 0,
    sunshines: 0,
    users: 0,
    donationAmount: 0,
    x: 400,
    y: 500,
    tags: ["Graphics", "WebGL", "Visualization", "3D", "Rendering"]
  }
];
async function ensureUsersHavePrivateKeys() {
  try {
    const collection = await getCollection("users");
    const users = await collection.find({}).toArray();
    let updatedCount = 0;
    for (const user of users) {
      if (!user.demoPrivateKey) {
        const wallet = Wallet.createRandom();
        await collection.updateOne(
          { _id: user._id },
          { $set: { demoPrivateKey: wallet.privateKey } }
        );
        updatedCount++;
      }
    }
    if (updatedCount > 0) {
      console.log(`✅ Generated private keys for ${updatedCount} users`);
    } else {
      console.log(`✅ All users already have private keys`);
    }
  } catch (error) {
    console.error("Error ensuring users have private keys:", error);
    throw error;
  }
}
async function setup() {
  console.log("🔄 Setting up demo...");
  try {
    await ensureUsersHavePrivateKeys();
    const maintainerId = await getOrCreateUserByEmail("milayter@gmail.com");
    console.log(`✅ Maintainer user ID: ${maintainerId}`);
    const projectIds = [];
    const now = Math.floor(Date.now() / 1e3);
    for (const galaxy of initialGalaxies) {
      const projectData = {
        uri: `/project?galaxy=${galaxy.name.toLowerCase().replace(/\s+/g, "-")}`,
        forkLines: [],
        socialLinks: [
          {
            label: "GitHub",
            uri: `https://github.com/example/${galaxy.name.toLowerCase().replace(/\s+/g, "-")}`,
            type: "github"
          },
          {
            label: "Blockchain Explorer",
            uri: `https://etherscan.io/address/0x${Math.random().toString(16).substring(2, 42)}`,
            type: "blockchain-explorer"
          },
          {
            label: "Documentation",
            uri: `https://docs.example.com/${galaxy.name.toLowerCase().replace(/\s+/g, "-")}`,
            type: "documentation"
          }
        ],
        createdAt: now,
        lastCommitId: void 0,
        lastCommitUpdateTime: void 0
      };
      const projectIdString = await getOrCreateProject(projectData);
      const projectId = new ObjectId(projectIdString);
      projectIds.push(projectId);
      console.log(`✅ Project created/linked for ${galaxy.name}: ${projectIdString}`);
    }
    const collection = await getCollection("galaxies");
    const existingCount = await collection.countDocuments({});
    if (existingCount === 0) {
      const galaxiesToCreate = initialGalaxies.map((galaxy, index) => ({
        ...galaxy,
        maintainer: maintainerId.toString(),
        projectLink: projectIds[index].toString()
      }));
      for (const galaxy of galaxiesToCreate) {
        await createGalaxy(galaxy);
      }
      console.log(`✅ Created ${galaxiesToCreate.length} demo galaxies`);
    } else {
      const existingGalaxies = await collection.find({}).toArray();
      let updatedCount = 0;
      for (let i = 0; i < existingGalaxies.length && i < initialGalaxies.length; i++) {
        const galaxy = existingGalaxies[i];
        if (!galaxy.projectLink) {
          await collection.updateOne(
            { _id: galaxy._id },
            { $set: { projectLink: projectIds[i] } }
          );
          updatedCount++;
        }
      }
      if (updatedCount > 0) {
        console.log(`✅ Updated ${updatedCount} existing galaxies with project links`);
      } else {
        console.log(`✅ Galaxies already exist and have project links (${existingCount} found)`);
      }
    }
    console.log("🔄 Step 2 completed");
    await ensureGalaxiesOnBlockchain(collection);
  } catch (error) {
    console.error("Error setting up demo galaxies:", error);
    throw error;
  }
}
async function ensureGalaxiesOnBlockchain(collection) {
  console.log("Ensuring galaxies on blockchain...");
  console.log("🔄 Ensuring galaxies on blockchain...");
  try {
    const galaxies = await getAllGalaxies();
    const maintainerUser = await getUserByEmail("milayter@gmail.com");
    if (!maintainerUser || !maintainerUser._id || !maintainerUser.demoPrivateKey) {
      console.error("Maintainer user not found or missing private key, skipping blockchain setup");
      return;
    }
    const maintainerWallet = new Wallet(maintainerUser.demoPrivateKey);
    const maintainerAddress = maintainerWallet.address;
    let createdCount = 0;
    for (const galaxy of galaxies) {
      if (galaxy.blockchainId) {
        continue;
      }
      const project = await getProjectById(galaxy.projectLink);
      if (!project) {
        console.warn(`Project not found for galaxy ${galaxy.name}, skipping blockchain creation`);
        continue;
      }
      const githubLink = project.socialLinks?.find((link) => link.type === "github");
      const repoUrl = githubLink?.uri || `https://github.com/example/${galaxy.name.toLowerCase().replace(/\s+/g, "-")}`;
      const issuesUrl = `https://app.ara.foundation/project/issues?galaxy=${galaxy._id}`;
      const randomWallet = Wallet.createRandom();
      const address20Bytes = randomWallet.address;
      const galaxyId32Bytes = `0x${address20Bytes.slice(2).padStart(64, "0")}`;
      const request = {
        cmd: "addGalaxy",
        params: {
          owner: maintainerAddress,
          repoUrl,
          issuesUrl,
          name: galaxy.name,
          id: galaxyId32Bytes,
          // string, not number
          minX: galaxy.x,
          maxX: galaxy.x + 100,
          // Add appropriate range
          minY: galaxy.y,
          maxY: galaxy.y + 100
          // Add appropriate range
        }
      };
      try {
        const reply = await send(request);
        if ("error" in reply) {
          const errorReply = reply;
          console.error(`Error creating galaxy ${galaxy.name} on blockchain:`, errorReply.error);
          await new Promise((resolve) => setTimeout(resolve, 100));
          continue;
        }
        const successReply = reply;
        const galaxyObjectId = galaxy._id ? new ObjectId(galaxy._id) : null;
        if (galaxyObjectId) {
          await collection.updateOne(
            { _id: galaxyObjectId },
            {
              $set: {
                blockchainId: galaxyId32Bytes,
                blockchainTx: successReply.params.txHash
              }
            }
          );
          console.log(`✅ Created galaxy ${galaxy.name} on blockchain: ${galaxyId32Bytes}, tx: ${successReply.params.txHash}`);
          createdCount++;
        }
        await new Promise((resolve) => setTimeout(resolve, 100));
      } catch (error) {
        console.error(`Error calling blockchain gateway for galaxy ${galaxy.name}:`, error);
        await new Promise((resolve) => setTimeout(resolve, 200));
      }
    }
    if (createdCount > 0) {
      console.log(`✅ Created ${createdCount} galaxies on blockchain`);
    } else {
      console.log(`✅ All galaxies already exist on blockchain`);
    }
  } catch (error) {
    console.error("Error ensuring galaxies on blockchain:", error);
    throw error;
  }
}

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  await setup();
  const galaxyId = Astro2.url.searchParams.get("galaxy");
  const selectedGalaxy = galaxyId ? await getGalaxyById(galaxyId) : null;
  const allGalaxiesData = await getAllGalaxies();
  const currentStarsunshines = 0;
  const allGalaxies = allGalaxiesData.map((galaxy, index) => ({
    x: galaxy.x,
    y: galaxy.y,
    projectName: galaxy.name,
    projectId: galaxy._id?.toString() || "",
    galaxyData: galaxy,
    tags: galaxy.tags,
    leaderboardPosition: index + 1
  }));
  return renderTemplate`${renderComponent($$result, "GalaxyLayout", $$GalaxyLayout, { "active": MenuName.ProjectList, "hideLinks": Object.keys(MenuName), "projectName": "Ara Universe", "projectX": selectedGalaxy?.x, "projectY": selectedGalaxy?.y, "projectGalaxies": allGalaxies }, { "center": async ($$result2) => renderTemplate`${renderComponent($$result2, "UniverseHero", null, { "slot": "center", "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/all-stars/UniverseHero", "client:component-export": "default" })}${renderComponent($$result2, "DemoCtaPanel", null, { "slot": "center", "client:only": "react", "projectName": selectedGalaxy?.name || "", "galaxyId": selectedGalaxy?._id.toString() || "", "client:component-hydration": "only", "client:component-path": "@/components/project/DemoCtaPanel", "client:component-export": "default" })}`, "default": async ($$result2) => renderTemplate`      ${renderComponent($$result2, "GalaxyAutoZoom", null, { "client:only": "react", "galaxyX": selectedGalaxy?.x || 0, "galaxyY": selectedGalaxy?.y || 0, "client:component-hydration": "only", "client:component-path": "@/components/all-stars/GalaxyAutoZoom", "client:component-export": "default" })} `, "footer": async ($$result2) => renderTemplate`${renderComponent($$result2, "UniverseResearchPanel", null, { "slot": "footer", "client:only": "react", "starsunshines": currentStarsunshines, "client:component-hydration": "only", "client:component-path": "@/components/all-stars/UniverseResearchPanel", "client:component-export": "default" })}`, "header-navbar": async ($$result2) => renderTemplate`${maybeRenderHead()}<div class="flex items-center justify-center pt-4"> ${renderComponent($$result2, "NewGalaxyButton", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/all-stars/NewGalaxyButton", "client:component-export": "default" })} </div>`, "left": async ($$result2) => renderTemplate`${selectedGalaxy && renderTemplate`${renderComponent($$result2, "BackButton", BackButton, { "slot": "left", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/custom-ui/BackButton", "client:component-export": "default" })}`}${renderComponent($$result2, "AllStarsLeaderboardPanels", null, { "slot": "left", "client:only": "react", "topGalaxies": allGalaxiesData, "client:component-hydration": "only", "client:component-path": "@/components/all-stars/AllStarsLeaderboardPanels", "client:component-export": "default" })}`, "right": async ($$result2) => renderTemplate`${renderComponent($$result2, "AllStarsContestPanel", null, { "slot": "right", "client:only": "react", "prizePool": mockContestData.prizePool, "contestFromDate": mockContestData.fromDate, "contestToDate": mockContestData.toDate, "contestDescription": mockContestData.description, "client:component-hydration": "only", "client:component-path": "@/components/all-stars/AllStarsContestPanel", "client:component-export": "default" })}` })} `;
}, "/home/medet/ara-app/src/pages/all-stars/index.astro", void 0);

const $$file = "/home/medet/ara-app/src/pages/all-stars/index.astro";
const $$url = "/all-stars";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
