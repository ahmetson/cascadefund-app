import require$$0 from 'module';
import nativeFs from 'fs';
import require$$2 from 'path';
import require$$3 from 'events';
import require$$1 from 'os';
import require$$3$1 from 'crypto';

var lib = {};

var util = {};

var hasRequiredUtil;

function requireUtil () {
	if (hasRequiredUtil) return util;
	hasRequiredUtil = 1;
	Object.defineProperty(util, "__esModule", { value: true });
	util.allowMethods = void 0;
	/**
	 * This function is used to remove the given methods from the given socket_prototype
	 * to make the relevant socket types have only their relevant methods.
	 * @param socketPrototype
	 * @param methods
	 *
	 * @internal
	 */
	function allowMethods(socketPrototype, methods) {
	    const toDelete = ["send", "receive", "join", "leave"];
	    for (const method of toDelete) {
	        if (methods.includes(method)) {
	            delete socketPrototype[method];
	        }
	    }
	}
	util.allowMethods = allowMethods;
	
	return util;
}

var native$1 = {exports: {}};

var loadAddon = {};

function commonjsRequire(path) {
	throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}

var loader = {};

var hasRequiredLoader;

function requireLoader () {
	if (hasRequiredLoader) return loader;
	hasRequiredLoader = 1;
	(function (exports) {
Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const g=require$$0,u=nativeFs,h=require$$2;var l=typeof document<"u"?document.currentScript:null;function b(t){return t==="linux"?u.existsSync("/etc/alpine-release")?"musl":"glibc":t==="darwin"?"libc":t==="win32"?"msvc":"unknown"}class p{level=2;setLevel(e="info"){this.level=e==="trace"?4:e==="debug"?3:e==="info"?2:e==="warn"?1:e==="error"?0:-1;}error(...e){this.level>=0&&console.error("\x1B[31m[ERROR cmake-ts]\x1B[0m",...e);}warn(...e){this.level>=1&&console.warn("\x1B[33m[WARN cmake-ts]\x1B[0m",...e);}info(...e){this.level>=2&&console.info("\x1B[32m[INFO cmake-ts]\x1B[0m",...e);}log(...e){return this.info(...e)}debug(...e){this.level>=3&&console.debug("\x1B[34m[DEBUG cmake-ts]\x1B[0m",...e);}trace(...e){this.level>=4&&console.trace("\x1B[34m[TRACE cmake-ts]\x1B[0m",...e);}}const s=new p;function f(t){return t instanceof Error&&t.stack!==void 0?t.stack:String(t)}class w{buildDir;manifest;constructor(e){this.buildDir=e;const n=h.resolve(e,"manifest.json");if(!u.existsSync(n))throw new Error(`Manifest file not found at ${n}`);try{s.debug(`Reading and parsing manifest file at ${n}`);const r=u.readFileSync(n,"utf-8");this.manifest=JSON.parse(r);}catch(r){throw new Error(`Failed to read and parse the manifest file at ${n}: ${f(r)}`)}}findCompatibleConfigs(e){const n=this.getConfigKeys(),r=[];for(const i of n)try{const o=this.getConfig(i);if(o.os!==e.os||o.arch!==e.arch||o.libc!==e.libc){s.debug(`Config ${i} is not compatible with the current runtime. Skipping...`);continue}const a=this.getAddonPath(i);r.push([o,h.resolve(this.buildDir,a)]);}catch(o){s.warn(`Failed to parse config ${i}: ${f(o)}`);}if(r.length===0)throw new Error(`No compatible zeromq.js addon found for ${e.os} ${e.arch} ${e.libc}. The candidates were:
${n.join(`
`)}`);return r.sort(([i,o],[a,c])=>{var d,m;return ((d=a.abi)!=null?d:0)-((m=i.abi)!=null?m:0)}),r}getConfigKeys(){return Object.keys(this.manifest)}getConfig(e){return JSON.parse(e)}getAddonPath(e){return this.manifest[e]}}function y(){return {os:process.platform,arch:process.arch,libc:b(process.platform)}}function $(t){let e;try{const n=y(),i=new w(t).findCompatibleConfigs(n),o=typeof commonjsRequire=="function"?commonjsRequire:g.createRequire(typeof document>"u"?require("url").pathToFileURL(__filename).href:l&&l.tagName.toUpperCase()==="SCRIPT"&&l.src||new URL("loader.js",document.baseURI).href);for(const[a,c]of i)try{s.debug(`Loading addon at ${c}`),e=o(c);break}catch(d){s.warn(`Failed to load addon at ${c}: ${f(d)}
Trying others...`);}}catch(n){throw new Error(`Failed to load zeromq.js addon.node: ${f(n)}`)}if(e===void 0)throw new Error("No compatible zeromq.js addon found");return e}exports.loadAddon=$;
		
	} (loader));
	return loader;
}

var hasRequiredLoadAddon;

function requireLoadAddon () {
	if (hasRequiredLoadAddon) return loadAddon;
	hasRequiredLoadAddon = 1;
	var __importDefault = (loadAddon && loadAddon.__importDefault) || function (mod) {
	    return (mod && mod.__esModule) ? mod : { "default": mod };
	};
	Object.defineProperty(loadAddon, "__esModule", { value: true });
	const loader_1 = requireLoader();
	const path_1 = __importDefault(require$$2);
	const addon = (0, loader_1.loadAddon)(path_1.default.resolve(__dirname, "..", "build"));
	loadAddon.default = addon;
	
	return loadAddon;
}

var native = native$1.exports;

var hasRequiredNative;

function requireNative () {
	if (hasRequiredNative) return native$1.exports;
	hasRequiredNative = 1;
	/* eslint-disable @typescript-eslint/no-var-requires */
	var __importDefault = (native && native.__importDefault) || function (mod) {
	    return (mod && mod.__esModule) ? mod : { "default": mod };
	};
	Object.defineProperty(native, "__esModule", { value: true });
	/* Declare all native C++ classes and methods in this file. */
	const load_addon_1 = __importDefault(requireLoadAddon());
	native$1.exports = load_addon_1.default;
	
	return native$1.exports;
}

var draft = {};

var hasRequiredDraft;

function requireDraft () {
	if (hasRequiredDraft) return draft;
	hasRequiredDraft = 1;
	Object.defineProperty(draft, "__esModule", { value: true });
	draft.Datagram = draft.Scatter = draft.Gather = draft.Dish = draft.Radio = draft.Client = draft.Server = void 0;
	const native_1 = requireNative();
	const util_1 = requireUtil();
	class Server extends native_1.Socket {
	    constructor(options) {
	        super(12 /* SocketType.Server */, options);
	    }
	}
	draft.Server = Server;
	(0, util_1.allowMethods)(Server.prototype, ["send", "receive"]);
	class Client extends native_1.Socket {
	    constructor(options) {
	        super(13 /* SocketType.Client */, options);
	    }
	}
	draft.Client = Client;
	(0, util_1.allowMethods)(Client.prototype, ["send", "receive"]);
	class Radio extends native_1.Socket {
	    constructor(options) {
	        super(14 /* SocketType.Radio */, options);
	    }
	}
	draft.Radio = Radio;
	(0, util_1.allowMethods)(Radio.prototype, ["send"]);
	class Dish extends native_1.Socket {
	    constructor(options) {
	        super(15 /* SocketType.Dish */, options);
	    }
	    join(...values) {
	        const { join } = native_1.Socket.prototype;
	        join(values);
	    }
	    leave(...values) {
	        const { leave } = native_1.Socket.prototype;
	        leave(values);
	    }
	}
	draft.Dish = Dish;
	(0, util_1.allowMethods)(Dish.prototype, ["receive", "join", "leave"]);
	class Gather extends native_1.Socket {
	    constructor(options) {
	        super(16 /* SocketType.Gather */, options);
	    }
	}
	draft.Gather = Gather;
	(0, util_1.allowMethods)(Gather.prototype, ["receive"]);
	class Scatter extends native_1.Socket {
	    constructor(options) {
	        super(17 /* SocketType.Scatter */, options);
	    }
	}
	draft.Scatter = Scatter;
	(0, util_1.allowMethods)(Scatter.prototype, ["send"]);
	class Datagram extends native_1.Socket {
	    constructor(options) {
	        super(18 /* SocketType.Datagram */, options);
	    }
	}
	draft.Datagram = Datagram;
	(0, util_1.allowMethods)(Datagram.prototype, ["send", "receive"]);
	
	return draft;
}

var hasRequiredLib;

function requireLib () {
	if (hasRequiredLib) return lib;
	hasRequiredLib = 1;
	(function (exports) {
		var __createBinding = (lib && lib.__createBinding) || (Object.create ? (function(o, m, k, k2) {
		    if (k2 === undefined) k2 = k;
		    var desc = Object.getOwnPropertyDescriptor(m, k);
		    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
		      desc = { enumerable: true, get: function() { return m[k]; } };
		    }
		    Object.defineProperty(o, k2, desc);
		}) : (function(o, m, k, k2) {
		    if (k2 === undefined) k2 = k;
		    o[k2] = m[k];
		}));
		var __setModuleDefault = (lib && lib.__setModuleDefault) || (Object.create ? (function(o, v) {
		    Object.defineProperty(o, "default", { enumerable: true, value: v });
		}) : function(o, v) {
		    o["default"] = v;
		});
		var __importStar = (lib && lib.__importStar) || function (mod) {
		    if (mod && mod.__esModule) return mod;
		    var result = {};
		    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
		    __setModuleDefault(result, mod);
		    return result;
		};
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.Stream = exports.XSubscriber = exports.XPublisher = exports.Push = exports.Pull = exports.Router = exports.Dealer = exports.Reply = exports.Request = exports.Subscriber = exports.Publisher = exports.Pair = exports.Proxy = exports.Observer = exports.Socket = exports.Context = exports.version = exports.curveKeyPair = exports.context = exports.capability = void 0;
		const util_1 = requireUtil();
		var native_1 = requireNative();
		Object.defineProperty(exports, "capability", { enumerable: true, get: function () { return native_1.capability; } });
		Object.defineProperty(exports, "context", { enumerable: true, get: function () { return native_1.context; } });
		Object.defineProperty(exports, "curveKeyPair", { enumerable: true, get: function () { return native_1.curveKeyPair; } });
		Object.defineProperty(exports, "version", { enumerable: true, get: function () { return native_1.version; } });
		Object.defineProperty(exports, "Context", { enumerable: true, get: function () { return native_1.Context; } });
		Object.defineProperty(exports, "Socket", { enumerable: true, get: function () { return native_1.Socket; } });
		Object.defineProperty(exports, "Observer", { enumerable: true, get: function () { return native_1.Observer; } });
		Object.defineProperty(exports, "Proxy", { enumerable: true, get: function () { return native_1.Proxy; } });
		const native_2 = requireNative();
		const draft = __importStar(requireDraft());
		/* Support async iteration over received messages. Implementing this in JS
		   is faster as long as there is no C++ native API to chain promises. */
		function asyncIterator() {
		    return {
		        next: async () => {
		            if (this.closed) {
		                /* Cast so we can omit 'value: undefined'. */
		                return { done: true };
		            }
		            try {
		                return { value: await this.receive(), done: false };
		            }
		            catch (err) {
		                if (this.closed && err.code === "EAGAIN") {
		                    /* Cast so we can omit 'value: undefined'. */
		                    return { done: true };
		                }
		                else {
		                    throw err;
		                }
		            }
		        },
		    };
		}
		Object.assign(native_2.Socket.prototype, { [Symbol.asyncIterator]: asyncIterator });
		Object.assign(native_2.Observer.prototype, { [Symbol.asyncIterator]: asyncIterator });
		if (!native_2.Observer.prototype.hasOwnProperty("emitter")) {
		    Object.defineProperty(native_2.Observer.prototype, "emitter", {
		        get: function emitter() {
		            /* eslint-disable-next-line @typescript-eslint/no-var-requires */
		            const events = require$$3;
		            const value = new events.EventEmitter();
		            const boundReceive = this.receive.bind(this);
		            Object.defineProperty(this, "receive", {
		                get: () => {
		                    throw new Error("Observer is in event emitter mode. " +
		                        "After a call to events.on() it is not possible to read events " +
		                        "with events.receive().");
		                },
		            });
		            const run = async () => {
		                while (!this.closed) {
		                    const event = await boundReceive();
		                    value.emit(event.type, event);
		                }
		            };
		            run();
		            Object.defineProperty(this, "emitter", { value });
		            return value;
		        },
		    });
		}
		native_2.Observer.prototype.on = function on(...args) {
		    return this.emitter.on(...args);
		};
		native_2.Observer.prototype.off = function off(...args) {
		    return this.emitter.off(...args);
		};
		/* Concrete socket types. */
		/**
		 * A {@link Pair} socket can only be connected to one other {@link Pair} at any
		 * one time. No message routing or filtering is performed on any messages.
		 *
		 * When a {@link Pair} socket enters the mute state due to having reached the
		 * high water mark for the connected peer, or if no peer is connected, then any
		 * {@link Writable.send}() operations on the socket shall block until the peer
		 * becomes available for sending; messages are not discarded.
		 *
		 * While {@link Pair} sockets can be used over transports other than
		 * `inproc://`, their inability to auto-reconnect coupled with the fact new
		 * incoming connections will be terminated while any previous connections
		 * (including ones in a closing state) exist makes them unsuitable for `tcp://`
		 * in most cases.
		 */
		class Pair extends native_2.Socket {
		    constructor(options) {
		        super(0 /* SocketType.Pair */, options);
		    }
		}
		exports.Pair = Pair;
		(0, util_1.allowMethods)(Pair.prototype, ["send", "receive"]);
		/**
		 * A {@link Publisher} socket is used to distribute data to {@link Subscriber}s.
		 * Messages sent are distributed in a fan out fashion to all connected peers.
		 * This socket cannot receive messages.
		 *
		 * When a {@link Publisher} enters the mute state due to having reached the high
		 * water mark for a connected {@link Subscriber}, then any messages that would
		 * be sent to the subscriber in question shall instead be dropped until the mute
		 * state ends. The {@link Writable.send}() method will never block.
		 *
		 * @includeExample examples/pub-sub/publisher.ts
		 */
		class Publisher extends native_2.Socket {
		    constructor(options) {
		        super(1 /* SocketType.Publisher */, options);
		    }
		}
		exports.Publisher = Publisher;
		(0, util_1.allowMethods)(Publisher.prototype, ["send"]);
		/**
		 * A {@link Subscriber} socket is used to subscribe to data distributed by a
		 * {@link Publisher}. Initially a {@link Subscriber} is not subscribed to any
		 * messages. Use {@link Subscriber.subscribe}() to specify which messages to
		 * subscribe to. This socket cannot send messages.
		 *
		 * @includeExample examples/pub-sub/subscriber.ts
		 */
		class Subscriber extends native_2.Socket {
		    constructor(options) {
		        super(2 /* SocketType.Subscriber */, options);
		    }
		    /**
		     * Establish a new message filter. Newly created {@link Subscriber} sockets
		     * will filtered out all incoming messages. Call this method to subscribe to
		     * messages beginning with the given prefix.
		     *
		     * Multiple filters may be attached to a single socket, in which case a
		     * message shall be accepted if it matches at least one filter. Subscribing
		     * without any filters shall subscribe to **all** incoming messages.
		     *
		     * ```typescript
		     * const sub = new Subscriber()
		     *
		     * // Listen to all messages beginning with 'foo'.
		     * sub.subscribe("foo")
		     *
		     * // Listen to all incoming messages.
		     * sub.subscribe()
		     * ```
		     *
		     * @param prefixes The prefixes of messages to subscribe to.
		     */
		    subscribe(...prefixes) {
		        if (prefixes.length === 0) {
		            this.setStringOption(6, null);
		        }
		        else {
		            for (const prefix of prefixes) {
		                this.setStringOption(6, prefix);
		            }
		        }
		    }
		    /**
		     * Remove an existing message filter which was previously established with
		     * {@link subscribe}(). Stops receiving messages with the given prefix.
		     *
		     * Unsubscribing without any filters shall unsubscribe from the "subscribe
		     * all" filter that is added by calling {@link subscribe}() without arguments.
		     *
		     * ```typescript
		     * const sub = new Subscriber()
		     *
		     * // Listen to all messages beginning with 'foo'.
		     * sub.subscribe("foo")
		     * // ...
		     *
		     * // Stop listening to messages beginning with 'foo'.
		     * sub.unsubscribe("foo")
		     * ```
		     *
		     * @param prefixes The prefixes of messages to subscribe to.
		     */
		    unsubscribe(...prefixes) {
		        if (prefixes.length === 0) {
		            this.setStringOption(7, null);
		        }
		        else {
		            for (const prefix of prefixes) {
		                this.setStringOption(7, prefix);
		            }
		        }
		    }
		}
		exports.Subscriber = Subscriber;
		(0, util_1.allowMethods)(Subscriber.prototype, ["receive"]);
		/**
		 * A {@link Request} socket acts as a client to send requests to and receive
		 * replies from a {@link Reply} socket. This socket allows only an alternating
		 * sequence of {@link Writable.send}() and subsequent {@link Readable.receive}()
		 * calls. Each request sent is round-robined among all services, and each reply
		 * received is matched with the last issued request.
		 *
		 * If no services are available, then any send operation on the socket shall
		 * block until at least one service becomes available. The REQ socket shall not
		 * discard messages.
		 *
		 * @includeExample examples/req-rep/client.ts
		 */
		class Request extends native_2.Socket {
		    constructor(options) {
		        super(3 /* SocketType.Request */, options);
		    }
		}
		exports.Request = Request;
		(0, util_1.allowMethods)(Request.prototype, ["send", "receive"]);
		/**
		 * A {@link Reply} socket can act as a server which receives requests from and
		 * sends replies to a {@link Request} socket. This socket type allows only an
		 * alternating sequence of {@link Readable.receive}() and subsequent
		 * {@link Writable.send}() calls. Each request received is fair-queued from
		 * among all clients, and each reply sent is routed to the client that issued
		 * the last request. If the original requester does not exist any more the reply
		 * is silently discarded.
		 *
		 * @includeExample examples/req-rep/server.ts
		 */
		class Reply extends native_2.Socket {
		    constructor(options) {
		        super(4 /* SocketType.Reply */, options);
		    }
		}
		exports.Reply = Reply;
		(0, util_1.allowMethods)(Reply.prototype, ["send", "receive"]);
		/**
		 * A {@link Dealer} socket can be used to extend request/reply sockets. Each
		 * message sent is round-robined among all connected peers, and each message
		 * received is fair-queued from all connected peers.
		 *
		 * When a {@link Dealer} socket enters the mute state due to having reached the
		 * high water mark for all peers, or if there are no peers at all, then any
		 * {@link Writable.send}() operations on the socket shall block until the mute
		 * state ends or at least one peer becomes available for sending; messages are
		 * not discarded.
		 *
		 * When a {@link Dealer} is connected to a {@link Reply} socket, each message
		 * sent must consist of an empty message part, the delimiter, followed by one or
		 * more body parts.
		 *
		 * @includeExample examples/queue/index.ts
		 * @includeExample examples/queue/queue.ts
		 */
		class Dealer extends native_2.Socket {
		    constructor(options) {
		        super(5 /* SocketType.Dealer */, options);
		    }
		}
		exports.Dealer = Dealer;
		(0, util_1.allowMethods)(Dealer.prototype, ["send", "receive"]);
		/**
		 * A {@link Router} can be used to extend request/reply sockets. When receiving
		 * messages a {@link Router} shall prepend a message part containing the routing
		 * id of the originating peer to the message. Messages received are fair-queued
		 * from among all connected peers. When sending messages, the first part of the
		 * message is removed and used to determine the routing id of the peer the
		 * message should be routed to.
		 *
		 * If the peer does not exist anymore, or has never existed, the message shall
		 * be silently discarded. However, if {@link Router.mandatory} is set to `true`,
		 * the socket shall fail with a `EHOSTUNREACH` error in both cases.
		 *
		 * When a {@link Router} enters the mute state due to having reached the high
		 * water mark for all peers, then any messages sent to the socket shall be
		 * dropped until the mute state ends. Likewise, any messages routed to a peer
		 * for which the individual high water mark has been reached shall also be
		 * dropped. If {@link Router.mandatory} is set to `true` the socket shall block
		 * or return an `EAGAIN` error in both cases.
		 *
		 * When a {@link Request} socket is connected to a {@link Router}, in addition
		 * to the routing id of the originating peer each message received shall contain
		 * an empty delimiter message part. Hence, the entire structure of each received
		 * message as seen by the application becomes: one or more routing id parts,
		 * delimiter part, one or more body parts. When sending replies to a
		 * {@link Request} the delimiter part must be included.
		 */
		class Router extends native_2.Socket {
		    constructor(options) {
		        super(6 /* SocketType.Router */, options);
		    }
		    /**
		     * Connects to the given remote address. To specificy a specific routing id,
		     * provide a `routingId` option. The identity should be unique, from 1 to 255
		     * bytes long and MAY NOT start with binary zero.
		     *
		     * @param address The `tcp://` address to connect to.
		     * @param options Any connection options.
		     */
		    connect(address, options = {}) {
		        if (options.routingId) {
		            this.setStringOption(61, options.routingId);
		        }
		        super.connect(address);
		    }
		}
		exports.Router = Router;
		(0, util_1.allowMethods)(Router.prototype, ["send", "receive"]);
		/**
		 * A {@link Pull} socket is used by a pipeline node to receive messages from
		 * upstream pipeline nodes. Messages are fair-queued from among all connected
		 * upstream nodes. This socket cannot send messages.
		 *
		 * @includeExample examples/push-pull/worker.ts
		 */
		class Pull extends native_2.Socket {
		    constructor(options) {
		        super(7 /* SocketType.Pull */, options);
		    }
		}
		exports.Pull = Pull;
		(0, util_1.allowMethods)(Pull.prototype, ["receive"]);
		/**
		 * A {@link Push} socket is used by a pipeline node to send messages to
		 * downstream pipeline nodes. Messages are round-robined to all connected
		 * downstream nodes. This socket cannot receive messages.
		 *
		 * When a {@link Push} socket enters the mute state due to having reached the
		 * high water mark for all downstream nodes, or if there are no downstream nodes
		 * at all, then {@link Writable.send}() will block until the mute state ends or
		 * at least one downstream node becomes available for sending; messages are not
		 * discarded.
		 *
		 * @includeExample examples/push-pull/producer.ts
		 */
		class Push extends native_2.Socket {
		    constructor(options) {
		        super(8 /* SocketType.Push */, options);
		    }
		}
		exports.Push = Push;
		(0, util_1.allowMethods)(Push.prototype, ["send"]);
		/**
		 * Same as {@link Publisher}, except that you can receive subscriptions from the
		 * peers in form of incoming messages. Subscription message is a byte 1 (for
		 * subscriptions) or byte 0 (for unsubscriptions) followed by the subscription
		 * body. Messages without a sub/unsub prefix are also received, but have no
		 * effect on subscription status.
		 */
		class XPublisher extends native_2.Socket {
		    /**
		     * ZMQ_XPUB_VERBOSE / ZMQ_XPUB_VERBOSER
		     *
		     * Whether to pass any duplicate subscription/unsuscription messages.
		     *  * `null` (default) - Only unique subscribe and unsubscribe messages are
		     *    visible to the caller.
		     *  * `"allSubs"` - All subscribe messages (including duplicates) are visible
		     *    to the caller, but only unique unsubscribe messages are visible.
		     *  * `"allSubsUnsubs"` - All subscribe and unsubscribe messages (including
		     *    duplicates) are visible to the caller.
		     */
		    set verbosity(value) {
		        /* ZMQ_XPUB_VERBOSE and ZMQ_XPUB_VERBOSER interact, so we normalize the
		           situation by making it a single property. */
		        switch (value) {
		            case null:
		                /* This disables ZMQ_XPUB_VERBOSE + ZMQ_XPUB_VERBOSER: */
		                this.setBoolOption(40 /* ZMQ_XPUB_VERBOSE */, false);
		                break;
		            case "allSubs":
		                this.setBoolOption(40 /* ZMQ_XPUB_VERBOSE */, true);
		                break;
		            case "allSubsUnsubs":
		                this.setBoolOption(78 /* ZMQ_XPUB_VERBOSER */, true);
		                break;
		        }
		    }
		    constructor(options) {
		        super(9 /* SocketType.XPublisher */, options);
		    }
		}
		exports.XPublisher = XPublisher;
		(0, util_1.allowMethods)(XPublisher.prototype, ["send", "receive"]);
		/**
		 * Same as {@link Subscriber}, except that you subscribe by sending subscription
		 * messages to the socket. Subscription message is a byte 1 (for subscriptions)
		 * or byte 0 (for unsubscriptions) followed by the subscription body. Messages
		 * without a sub/unsub prefix may also be sent, but have no effect on
		 * subscription status.
		 */
		class XSubscriber extends native_2.Socket {
		    constructor(options) {
		        super(10 /* SocketType.XSubscriber */, options);
		    }
		}
		exports.XSubscriber = XSubscriber;
		(0, util_1.allowMethods)(XSubscriber.prototype, ["send", "receive"]);
		/**
		 * A {@link Stream} is used to send and receive TCP data from a non-ØMQ peer
		 * with the `tcp://` transport. A {@link Stream} can act as client and/or
		 * server, sending and/or receiving TCP data asynchronously.
		 *
		 * When sending and receiving data with {@link Writable.send}() and
		 * {@link Readable.receive}(), the first message part shall be the routing id of
		 * the peer. Unroutable messages will cause an error.
		 *
		 * When a connection is made to a {@link Stream}, a zero-length message will be
		 * received. Similarly, when the peer disconnects (or the connection is lost), a
		 * zero-length message will be received.
		 *
		 * To close a specific connection, {@link Writable.send}() the routing id frame
		 * followed by a zero-length message.
		 *
		 * To open a connection to a server, use {@link Stream.connect}().
		 */
		class Stream extends native_2.Socket {
		    constructor(options) {
		        super(11 /* SocketType.Stream */, options);
		    }
		    /**
		     * Connects to the given remote address. To specificy a specific routing id,
		     * provide a `routingId` option. The identity should be unique, from 1 to 255
		     * bytes long and MAY NOT start with binary zero.
		     *
		     * @param address The `tcp://` address to connect to.
		     * @param options Any connection options.
		     */
		    connect(address, options = {}) {
		        if (options.routingId) {
		            this.setStringOption(61, options.routingId);
		        }
		        super.connect(address);
		    }
		}
		exports.Stream = Stream;
		(0, util_1.allowMethods)(Stream.prototype, ["send", "receive"]);
		/* The default is to use R/w. The overloads above ensure the correct flag is
		   set if the property has been defined as readonly in the interface/class. */
		function defineOpt(targets, name, id, type, acc = 3 /* Acc.ReadWrite */, values) {
		    const desc = {};
		    if (acc & 1 /* Acc.Read */) {
		        const getter = `get${type}Option`;
		        if (values) {
		            desc.get = function get() {
		                return values[this[getter](id)];
		            };
		        }
		        else {
		            desc.get = function get() {
		                return this[getter](id);
		            };
		        }
		    }
		    if (acc & 2 /* Acc.Write */) {
		        const setter = `set${type}Option`;
		        if (values) {
		            desc.set = function set(val) {
		                this[setter](id, values.indexOf(val));
		            };
		        }
		        else {
		            desc.set = function set(val) {
		                this[setter](id, val);
		            };
		        }
		    }
		    for (const target of targets) {
		        if (target.prototype.hasOwnProperty(name)) {
		            continue;
		        }
		        Object.defineProperty(target.prototype, name, desc);
		    }
		}
		/* Context options. ALSO include any options in the Context interface above. */
		defineOpt([native_2.Context], "ioThreads", 1, "Int32" /* Type.Int32 */);
		defineOpt([native_2.Context], "maxSockets", 2, "Int32" /* Type.Int32 */);
		defineOpt([native_2.Context], "maxSocketsLimit", 3, "Int32" /* Type.Int32 */, 1 /* Acc.Read */);
		defineOpt([native_2.Context], "threadPriority", 3, "Int32" /* Type.Int32 */, 2 /* Acc.Write */);
		defineOpt([native_2.Context], "threadSchedulingPolicy", 4, "Int32" /* Type.Int32 */, 2 /* Acc.Write */);
		defineOpt([native_2.Context], "maxMessageSize", 5, "Int32" /* Type.Int32 */);
		defineOpt([native_2.Context], "ipv6", 42, "Bool" /* Type.Bool */);
		defineOpt([native_2.Context], "blocky", 70, "Bool" /* Type.Bool */);
		/* Option 'msgTSize' is fairly useless in Node.js. */
		/* These options should be methods. */
		/* defineOpt([Context], "threadAffinityCpuAdd", 7, Type.Int32) */
		/* defineOpt([Context], "threadAffinityCpuRemove", 8, Type.Int32) */
		/* To be released in a new ZeroMQ version. */
		/* if (Context.prototype.setStringOption) {
		  defineOpt([Context], "threadNamePrefix", 9, Type.String)
		} */
		/* There should be no reason to change this in JS. */
		/* defineOpt([Context], "zeroCopyRecv", 10, Type.Bool) */
		/* Socket options. ALSO include any options in the Socket interface above. */
		const writables = [
		    Pair,
		    Publisher,
		    Request,
		    Reply,
		    Dealer,
		    Router,
		    Push,
		    XPublisher,
		    XSubscriber,
		    Stream,
		    draft.Server,
		    draft.Client,
		    draft.Radio,
		    draft.Scatter,
		    draft.Datagram,
		];
		defineOpt(writables, "sendBufferSize", 11, "Int32" /* Type.Int32 */);
		defineOpt(writables, "sendHighWaterMark", 23, "Int32" /* Type.Int32 */);
		defineOpt(writables, "sendTimeout", 28, "Int32" /* Type.Int32 */);
		defineOpt(writables, "multicastHops", 25, "Int32" /* Type.Int32 */);
		const readables = [
		    Pair,
		    Subscriber,
		    Request,
		    Reply,
		    Dealer,
		    Router,
		    Pull,
		    XPublisher,
		    XSubscriber,
		    Stream,
		    draft.Server,
		    draft.Client,
		    draft.Dish,
		    draft.Gather,
		    draft.Datagram,
		];
		defineOpt(readables, "receiveBufferSize", 12, "Int32" /* Type.Int32 */);
		defineOpt(readables, "receiveHighWaterMark", 24, "Int32" /* Type.Int32 */);
		defineOpt(readables, "receiveTimeout", 27, "Int32" /* Type.Int32 */);
		defineOpt([native_2.Socket], "affinity", 4, "Uint64" /* Type.Uint64 */);
		defineOpt([Request, Reply, Router, Dealer], "routingId", 5, "String" /* Type.String */);
		defineOpt([native_2.Socket], "rate", 8, "Int32" /* Type.Int32 */);
		defineOpt([native_2.Socket], "recoveryInterval", 9, "Int32" /* Type.Int32 */);
		defineOpt([native_2.Socket], "type", 16, "Int32" /* Type.Int32 */, 1 /* Acc.Read */);
		defineOpt([native_2.Socket], "linger", 17, "Int32" /* Type.Int32 */);
		defineOpt([native_2.Socket], "reconnectInterval", 18, "Int32" /* Type.Int32 */);
		defineOpt([native_2.Socket], "backlog", 19, "Int32" /* Type.Int32 */);
		defineOpt([native_2.Socket], "reconnectMaxInterval", 21, "Int32" /* Type.Int32 */);
		defineOpt([native_2.Socket], "maxMessageSize", 22, "Int64" /* Type.Int64 */);
		defineOpt([native_2.Socket], "lastEndpoint", 32, "String" /* Type.String */, 1 /* Acc.Read */);
		defineOpt([Router], "mandatory", 33, "Bool" /* Type.Bool */);
		defineOpt([native_2.Socket], "tcpKeepalive", 34, "Int32" /* Type.Int32 */);
		defineOpt([native_2.Socket], "tcpKeepaliveCount", 35, "Int32" /* Type.Int32 */);
		defineOpt([native_2.Socket], "tcpKeepaliveIdle", 36, "Int32" /* Type.Int32 */);
		defineOpt([native_2.Socket], "tcpKeepaliveInterval", 37, "Int32" /* Type.Int32 */);
		defineOpt([native_2.Socket], "tcpAcceptFilter", 38, "String" /* Type.String */);
		defineOpt([native_2.Socket], "immediate", 39, "Bool" /* Type.Bool */);
		/* Option 'verbose' is implemented as verbosity on XPublisher. */
		defineOpt([native_2.Socket], "ipv6", 42, "Bool" /* Type.Bool */);
		defineOpt([native_2.Socket], "securityMechanism", 43, "Int32" /* Type.Int32 */, 1 /* Acc.Read */, [
		    null,
		    "plain",
		    "curve",
		    "gssapi",
		]);
		defineOpt([native_2.Socket], "plainServer", 44, "Bool" /* Type.Bool */);
		defineOpt([native_2.Socket], "plainUsername", 45, "String" /* Type.String */);
		defineOpt([native_2.Socket], "plainPassword", 46, "String" /* Type.String */);
		if (native_2.capability.curve) {
		    defineOpt([native_2.Socket], "curveServer", 47, "Bool" /* Type.Bool */);
		    defineOpt([native_2.Socket], "curvePublicKey", 48, "String" /* Type.String */);
		    defineOpt([native_2.Socket], "curveSecretKey", 49, "String" /* Type.String */);
		    defineOpt([native_2.Socket], "curveServerKey", 50, "String" /* Type.String */);
		}
		defineOpt([Router, Dealer, Request], "probeRouter", 51, "Bool" /* Type.Bool */, 2 /* Acc.Write */);
		defineOpt([Request], "correlate", 52, "Bool" /* Type.Bool */, 2 /* Acc.Write */);
		defineOpt([Request], "relaxed", 53, "Bool" /* Type.Bool */, 2 /* Acc.Write */);
		const conflatables = [
		    Pull,
		    Push,
		    Subscriber,
		    Publisher,
		    Dealer,
		    draft.Scatter,
		    draft.Gather,
		];
		defineOpt(conflatables, "conflate", 54, "Bool" /* Type.Bool */, 2 /* Acc.Write */);
		defineOpt([native_2.Socket], "zapDomain", 55, "String" /* Type.String */);
		defineOpt([Router], "handover", 56, "Bool" /* Type.Bool */, 2 /* Acc.Write */);
		defineOpt([native_2.Socket], "typeOfService", 57, "Uint32" /* Type.Uint32 */);
		if (native_2.capability.gssapi) {
		    defineOpt([native_2.Socket], "gssapiServer", 62, "Bool" /* Type.Bool */);
		    defineOpt([native_2.Socket], "gssapiPrincipal", 63, "String" /* Type.String */);
		    defineOpt([native_2.Socket], "gssapiServicePrincipal", 64, "String" /* Type.String */);
		    defineOpt([native_2.Socket], "gssapiPlainText", 65, "Bool" /* Type.Bool */);
		    const principals = ["hostBased", "userName", "krb5Principal"];
		    defineOpt([native_2.Socket], "gssapiPrincipalNameType", 90, "Int32" /* Type.Int32 */, 3 /* Acc.ReadWrite */, principals);
		    defineOpt([native_2.Socket], "gssapiServicePrincipalNameType", 91, "Int32" /* Type.Int32 */, 3 /* Acc.ReadWrite */, principals);
		}
		defineOpt([native_2.Socket], "handshakeInterval", 66, "Int32" /* Type.Int32 */);
		defineOpt([native_2.Socket], "socksProxy", 68, "String" /* Type.String */);
		defineOpt([XPublisher, Publisher], "noDrop", 69, "Bool" /* Type.Bool */, 2 /* Acc.Write */);
		defineOpt([XPublisher], "manual", 71, "Bool" /* Type.Bool */, 2 /* Acc.Write */);
		defineOpt([XPublisher], "welcomeMessage", 72, "String" /* Type.String */, 2 /* Acc.Write */);
		defineOpt([Stream], "notify", 73, "Bool" /* Type.Bool */, 2 /* Acc.Write */);
		defineOpt([Publisher, Subscriber, XPublisher], "invertMatching", 74, "Bool" /* Type.Bool */);
		defineOpt([native_2.Socket], "heartbeatInterval", 75, "Int32" /* Type.Int32 */);
		defineOpt([native_2.Socket], "heartbeatTimeToLive", 76, "Int32" /* Type.Int32 */);
		defineOpt([native_2.Socket], "heartbeatTimeout", 77, "Int32" /* Type.Int32 */);
		/* Option 'verboser' is implemented as verbosity on XPublisher. */
		defineOpt([native_2.Socket], "connectTimeout", 79, "Int32" /* Type.Int32 */);
		defineOpt([native_2.Socket], "tcpMaxRetransmitTimeout", 80, "Int32" /* Type.Int32 */);
		defineOpt([native_2.Socket], "threadSafe", 81, "Bool" /* Type.Bool */, 1 /* Acc.Read */);
		defineOpt([native_2.Socket], "multicastMaxTransportDataUnit", 84, "Int32" /* Type.Int32 */);
		defineOpt([native_2.Socket], "vmciBufferSize", 85, "Uint64" /* Type.Uint64 */);
		defineOpt([native_2.Socket], "vmciBufferMinSize", 86, "Uint64" /* Type.Uint64 */);
		defineOpt([native_2.Socket], "vmciBufferMaxSize", 87, "Uint64" /* Type.Uint64 */);
		defineOpt([native_2.Socket], "vmciConnectTimeout", 88, "Int32" /* Type.Int32 */);
		/* Option 'useFd' is fairly useless in Node.js. */
		defineOpt([native_2.Socket], "interface", 92, "String" /* Type.String */);
		defineOpt([native_2.Socket], "zapEnforceDomain", 93, "Bool" /* Type.Bool */);
		defineOpt([native_2.Socket], "loopbackFastPath", 94, "Bool" /* Type.Bool */);
		/* The following options are still in DRAFT. */
		/* defineOpt([Socket], "metadata", 95, Type.String) */
		/* defineOpt([Socket], "multicastLoop", 96, Type.String) */
		/* defineOpt([Router], "notify", 97, Type.String) */
		/* defineOpt([XPublisher], "manualLastValue", 98, Type.String) */
		/* defineOpt([Socket], "socksUsername", 99, Type.String) */
		/* defineOpt([Socket], "socksPassword", 100, Type.String) */
		/* defineOpt([Socket], "inBatchSize", 101, Type.String) */
		/* defineOpt([Socket], "outBatchSize", 102, Type.String) */
		
	} (lib));
	return lib;
}

var libExports = requireLib();

var config = {};

var main = {exports: {}};

const version = "17.2.1";
const require$$4 = {
  version};

var hasRequiredMain;

function requireMain () {
	if (hasRequiredMain) return main.exports;
	hasRequiredMain = 1;
	const fs = nativeFs;
	const path = require$$2;
	const os = require$$1;
	const crypto = require$$3$1;
	const packageJson = require$$4;

	const version = packageJson.version;

	// Array of tips to display randomly
	const TIPS = [
	  '🔐 encrypt with Dotenvx: https://dotenvx.com',
	  '🔐 prevent committing .env to code: https://dotenvx.com/precommit',
	  '🔐 prevent building .env in docker: https://dotenvx.com/prebuild',
	  '📡 observe env with Radar: https://dotenvx.com/radar',
	  '📡 auto-backup env with Radar: https://dotenvx.com/radar',
	  '📡 version env with Radar: https://dotenvx.com/radar',
	  '🛠️  run anywhere with `dotenvx run -- yourcommand`',
	  '⚙️  specify custom .env file path with { path: \'/custom/path/.env\' }',
	  '⚙️  enable debug logging with { debug: true }',
	  '⚙️  override existing env vars with { override: true }',
	  '⚙️  suppress all logs with { quiet: true }',
	  '⚙️  write to custom object with { processEnv: myObject }',
	  '⚙️  load multiple .env files with { path: [\'.env.local\', \'.env\'] }'
	];

	// Get a random tip from the tips array
	function _getRandomTip () {
	  return TIPS[Math.floor(Math.random() * TIPS.length)]
	}

	function parseBoolean (value) {
	  if (typeof value === 'string') {
	    return !['false', '0', 'no', 'off', ''].includes(value.toLowerCase())
	  }
	  return Boolean(value)
	}

	function supportsAnsi () {
	  return process.stdout.isTTY // && process.env.TERM !== 'dumb'
	}

	function dim (text) {
	  return supportsAnsi() ? `\x1b[2m${text}\x1b[0m` : text
	}

	const LINE = /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;

	// Parse src into an Object
	function parse (src) {
	  const obj = {};

	  // Convert buffer to string
	  let lines = src.toString();

	  // Convert line breaks to same format
	  lines = lines.replace(/\r\n?/mg, '\n');

	  let match;
	  while ((match = LINE.exec(lines)) != null) {
	    const key = match[1];

	    // Default undefined or null to empty string
	    let value = (match[2] || '');

	    // Remove whitespace
	    value = value.trim();

	    // Check if double quoted
	    const maybeQuote = value[0];

	    // Remove surrounding quotes
	    value = value.replace(/^(['"`])([\s\S]*)\1$/mg, '$2');

	    // Expand newlines if double quoted
	    if (maybeQuote === '"') {
	      value = value.replace(/\\n/g, '\n');
	      value = value.replace(/\\r/g, '\r');
	    }

	    // Add to object
	    obj[key] = value;
	  }

	  return obj
	}

	function _parseVault (options) {
	  options = options || {};

	  const vaultPath = _vaultPath(options);
	  options.path = vaultPath; // parse .env.vault
	  const result = DotenvModule.configDotenv(options);
	  if (!result.parsed) {
	    const err = new Error(`MISSING_DATA: Cannot parse ${vaultPath} for an unknown reason`);
	    err.code = 'MISSING_DATA';
	    throw err
	  }

	  // handle scenario for comma separated keys - for use with key rotation
	  // example: DOTENV_KEY="dotenv://:key_1234@dotenvx.com/vault/.env.vault?environment=prod,dotenv://:key_7890@dotenvx.com/vault/.env.vault?environment=prod"
	  const keys = _dotenvKey(options).split(',');
	  const length = keys.length;

	  let decrypted;
	  for (let i = 0; i < length; i++) {
	    try {
	      // Get full key
	      const key = keys[i].trim();

	      // Get instructions for decrypt
	      const attrs = _instructions(result, key);

	      // Decrypt
	      decrypted = DotenvModule.decrypt(attrs.ciphertext, attrs.key);

	      break
	    } catch (error) {
	      // last key
	      if (i + 1 >= length) {
	        throw error
	      }
	      // try next key
	    }
	  }

	  // Parse decrypted .env string
	  return DotenvModule.parse(decrypted)
	}

	function _warn (message) {
	  console.error(`[dotenv@${version}][WARN] ${message}`);
	}

	function _debug (message) {
	  console.log(`[dotenv@${version}][DEBUG] ${message}`);
	}

	function _log (message) {
	  console.log(`[dotenv@${version}] ${message}`);
	}

	function _dotenvKey (options) {
	  // prioritize developer directly setting options.DOTENV_KEY
	  if (options && options.DOTENV_KEY && options.DOTENV_KEY.length > 0) {
	    return options.DOTENV_KEY
	  }

	  // secondary infra already contains a DOTENV_KEY environment variable
	  if (process.env.DOTENV_KEY && process.env.DOTENV_KEY.length > 0) {
	    return process.env.DOTENV_KEY
	  }

	  // fallback to empty string
	  return ''
	}

	function _instructions (result, dotenvKey) {
	  // Parse DOTENV_KEY. Format is a URI
	  let uri;
	  try {
	    uri = new URL(dotenvKey);
	  } catch (error) {
	    if (error.code === 'ERR_INVALID_URL') {
	      const err = new Error('INVALID_DOTENV_KEY: Wrong format. Must be in valid uri format like dotenv://:key_1234@dotenvx.com/vault/.env.vault?environment=development');
	      err.code = 'INVALID_DOTENV_KEY';
	      throw err
	    }

	    throw error
	  }

	  // Get decrypt key
	  const key = uri.password;
	  if (!key) {
	    const err = new Error('INVALID_DOTENV_KEY: Missing key part');
	    err.code = 'INVALID_DOTENV_KEY';
	    throw err
	  }

	  // Get environment
	  const environment = uri.searchParams.get('environment');
	  if (!environment) {
	    const err = new Error('INVALID_DOTENV_KEY: Missing environment part');
	    err.code = 'INVALID_DOTENV_KEY';
	    throw err
	  }

	  // Get ciphertext payload
	  const environmentKey = `DOTENV_VAULT_${environment.toUpperCase()}`;
	  const ciphertext = result.parsed[environmentKey]; // DOTENV_VAULT_PRODUCTION
	  if (!ciphertext) {
	    const err = new Error(`NOT_FOUND_DOTENV_ENVIRONMENT: Cannot locate environment ${environmentKey} in your .env.vault file.`);
	    err.code = 'NOT_FOUND_DOTENV_ENVIRONMENT';
	    throw err
	  }

	  return { ciphertext, key }
	}

	function _vaultPath (options) {
	  let possibleVaultPath = null;

	  if (options && options.path && options.path.length > 0) {
	    if (Array.isArray(options.path)) {
	      for (const filepath of options.path) {
	        if (fs.existsSync(filepath)) {
	          possibleVaultPath = filepath.endsWith('.vault') ? filepath : `${filepath}.vault`;
	        }
	      }
	    } else {
	      possibleVaultPath = options.path.endsWith('.vault') ? options.path : `${options.path}.vault`;
	    }
	  } else {
	    possibleVaultPath = path.resolve(process.cwd(), '.env.vault');
	  }

	  if (fs.existsSync(possibleVaultPath)) {
	    return possibleVaultPath
	  }

	  return null
	}

	function _resolveHome (envPath) {
	  return envPath[0] === '~' ? path.join(os.homedir(), envPath.slice(1)) : envPath
	}

	function _configVault (options) {
	  const debug = parseBoolean(process.env.DOTENV_CONFIG_DEBUG || (options && options.debug));
	  const quiet = parseBoolean(process.env.DOTENV_CONFIG_QUIET || (options && options.quiet));

	  if (debug || !quiet) {
	    _log('Loading env from encrypted .env.vault');
	  }

	  const parsed = DotenvModule._parseVault(options);

	  let processEnv = process.env;
	  if (options && options.processEnv != null) {
	    processEnv = options.processEnv;
	  }

	  DotenvModule.populate(processEnv, parsed, options);

	  return { parsed }
	}

	function configDotenv (options) {
	  const dotenvPath = path.resolve(process.cwd(), '.env');
	  let encoding = 'utf8';
	  let processEnv = process.env;
	  if (options && options.processEnv != null) {
	    processEnv = options.processEnv;
	  }
	  let debug = parseBoolean(processEnv.DOTENV_CONFIG_DEBUG || (options && options.debug));
	  let quiet = parseBoolean(processEnv.DOTENV_CONFIG_QUIET || (options && options.quiet));

	  if (options && options.encoding) {
	    encoding = options.encoding;
	  } else {
	    if (debug) {
	      _debug('No encoding is specified. UTF-8 is used by default');
	    }
	  }

	  let optionPaths = [dotenvPath]; // default, look for .env
	  if (options && options.path) {
	    if (!Array.isArray(options.path)) {
	      optionPaths = [_resolveHome(options.path)];
	    } else {
	      optionPaths = []; // reset default
	      for (const filepath of options.path) {
	        optionPaths.push(_resolveHome(filepath));
	      }
	    }
	  }

	  // Build the parsed data in a temporary object (because we need to return it).  Once we have the final
	  // parsed data, we will combine it with process.env (or options.processEnv if provided).
	  let lastError;
	  const parsedAll = {};
	  for (const path of optionPaths) {
	    try {
	      // Specifying an encoding returns a string instead of a buffer
	      const parsed = DotenvModule.parse(fs.readFileSync(path, { encoding }));

	      DotenvModule.populate(parsedAll, parsed, options);
	    } catch (e) {
	      if (debug) {
	        _debug(`Failed to load ${path} ${e.message}`);
	      }
	      lastError = e;
	    }
	  }

	  const populated = DotenvModule.populate(processEnv, parsedAll, options);

	  // handle user settings DOTENV_CONFIG_ options inside .env file(s)
	  debug = parseBoolean(processEnv.DOTENV_CONFIG_DEBUG || debug);
	  quiet = parseBoolean(processEnv.DOTENV_CONFIG_QUIET || quiet);

	  if (debug || !quiet) {
	    const keysCount = Object.keys(populated).length;
	    const shortPaths = [];
	    for (const filePath of optionPaths) {
	      try {
	        const relative = path.relative(process.cwd(), filePath);
	        shortPaths.push(relative);
	      } catch (e) {
	        if (debug) {
	          _debug(`Failed to load ${filePath} ${e.message}`);
	        }
	        lastError = e;
	      }
	    }

	    _log(`injecting env (${keysCount}) from ${shortPaths.join(',')} ${dim(`-- tip: ${_getRandomTip()}`)}`);
	  }

	  if (lastError) {
	    return { parsed: parsedAll, error: lastError }
	  } else {
	    return { parsed: parsedAll }
	  }
	}

	// Populates process.env from .env file
	function config (options) {
	  // fallback to original dotenv if DOTENV_KEY is not set
	  if (_dotenvKey(options).length === 0) {
	    return DotenvModule.configDotenv(options)
	  }

	  const vaultPath = _vaultPath(options);

	  // dotenvKey exists but .env.vault file does not exist
	  if (!vaultPath) {
	    _warn(`You set DOTENV_KEY but you are missing a .env.vault file at ${vaultPath}. Did you forget to build it?`);

	    return DotenvModule.configDotenv(options)
	  }

	  return DotenvModule._configVault(options)
	}

	function decrypt (encrypted, keyStr) {
	  const key = Buffer.from(keyStr.slice(-64), 'hex');
	  let ciphertext = Buffer.from(encrypted, 'base64');

	  const nonce = ciphertext.subarray(0, 12);
	  const authTag = ciphertext.subarray(-16);
	  ciphertext = ciphertext.subarray(12, -16);

	  try {
	    const aesgcm = crypto.createDecipheriv('aes-256-gcm', key, nonce);
	    aesgcm.setAuthTag(authTag);
	    return `${aesgcm.update(ciphertext)}${aesgcm.final()}`
	  } catch (error) {
	    const isRange = error instanceof RangeError;
	    const invalidKeyLength = error.message === 'Invalid key length';
	    const decryptionFailed = error.message === 'Unsupported state or unable to authenticate data';

	    if (isRange || invalidKeyLength) {
	      const err = new Error('INVALID_DOTENV_KEY: It must be 64 characters long (or more)');
	      err.code = 'INVALID_DOTENV_KEY';
	      throw err
	    } else if (decryptionFailed) {
	      const err = new Error('DECRYPTION_FAILED: Please check your DOTENV_KEY');
	      err.code = 'DECRYPTION_FAILED';
	      throw err
	    } else {
	      throw error
	    }
	  }
	}

	// Populate process.env with parsed values
	function populate (processEnv, parsed, options = {}) {
	  const debug = Boolean(options && options.debug);
	  const override = Boolean(options && options.override);
	  const populated = {};

	  if (typeof parsed !== 'object') {
	    const err = new Error('OBJECT_REQUIRED: Please check the processEnv argument being passed to populate');
	    err.code = 'OBJECT_REQUIRED';
	    throw err
	  }

	  // Set process.env
	  for (const key of Object.keys(parsed)) {
	    if (Object.prototype.hasOwnProperty.call(processEnv, key)) {
	      if (override === true) {
	        processEnv[key] = parsed[key];
	        populated[key] = parsed[key];
	      }

	      if (debug) {
	        if (override === true) {
	          _debug(`"${key}" is already defined and WAS overwritten`);
	        } else {
	          _debug(`"${key}" is already defined and was NOT overwritten`);
	        }
	      }
	    } else {
	      processEnv[key] = parsed[key];
	      populated[key] = parsed[key];
	    }
	  }

	  return populated
	}

	const DotenvModule = {
	  configDotenv,
	  _configVault,
	  _parseVault,
	  config,
	  decrypt,
	  parse,
	  populate
	};

	main.exports.configDotenv = DotenvModule.configDotenv;
	main.exports._configVault = DotenvModule._configVault;
	main.exports._parseVault = DotenvModule._parseVault;
	main.exports.config = DotenvModule.config;
	main.exports.decrypt = DotenvModule.decrypt;
	main.exports.parse = DotenvModule.parse;
	main.exports.populate = DotenvModule.populate;

	main.exports = DotenvModule;
	return main.exports;
}

var envOptions;
var hasRequiredEnvOptions;

function requireEnvOptions () {
	if (hasRequiredEnvOptions) return envOptions;
	hasRequiredEnvOptions = 1;
	// ../config.js accepts options via environment variables
	const options = {};

	if (process.env.DOTENV_CONFIG_ENCODING != null) {
	  options.encoding = process.env.DOTENV_CONFIG_ENCODING;
	}

	if (process.env.DOTENV_CONFIG_PATH != null) {
	  options.path = process.env.DOTENV_CONFIG_PATH;
	}

	if (process.env.DOTENV_CONFIG_QUIET != null) {
	  options.quiet = process.env.DOTENV_CONFIG_QUIET;
	}

	if (process.env.DOTENV_CONFIG_DEBUG != null) {
	  options.debug = process.env.DOTENV_CONFIG_DEBUG;
	}

	if (process.env.DOTENV_CONFIG_OVERRIDE != null) {
	  options.override = process.env.DOTENV_CONFIG_OVERRIDE;
	}

	if (process.env.DOTENV_CONFIG_DOTENV_KEY != null) {
	  options.DOTENV_KEY = process.env.DOTENV_CONFIG_DOTENV_KEY;
	}

	envOptions = options;
	return envOptions;
}

var cliOptions;
var hasRequiredCliOptions;

function requireCliOptions () {
	if (hasRequiredCliOptions) return cliOptions;
	hasRequiredCliOptions = 1;
	const re = /^dotenv_config_(encoding|path|quiet|debug|override|DOTENV_KEY)=(.+)$/;

	cliOptions = function optionMatcher (args) {
	  const options = args.reduce(function (acc, cur) {
	    const matches = cur.match(re);
	    if (matches) {
	      acc[matches[1]] = matches[2];
	    }
	    return acc
	  }, {});

	  if (!('quiet' in options)) {
	    options.quiet = 'true';
	  }

	  return options
	};
	return cliOptions;
}

var hasRequiredConfig;

function requireConfig () {
	if (hasRequiredConfig) return config;
	hasRequiredConfig = 1;
	(function () {
	  requireMain().config(
	    Object.assign(
	      {},
	      requireEnvOptions(),
	      requireCliOptions()(process.argv)
	    )
	  );
	})();
	return config;
}

requireConfig();

const SAD = `🙁`;

process.env.NODE_ENV || "development";
var EnvVar = /* @__PURE__ */ ((EnvVar2) => {
  EnvVar2["PORT"] = "PORT";
  EnvVar2["HOST"] = "HOST";
  EnvVar2["NETWORK_ID"] = "NETWORK_ID";
  EnvVar2["NETWORK_URL"] = "NETWORK_URL";
  EnvVar2["SERVER_PRIVATE_KEY"] = "SERVER_PRIVATE_KEY";
  EnvVar2["OPENSOURCE_HYPERPAYMENT_SPEC_ID"] = "OPENSOURCE_HYPERPAYMENT_SPEC_ID";
  return EnvVar2;
})(EnvVar || {});
const envDescriptions = {
  PORT: "port where it will expose reply worker",
  NETWORK_ID: "chain id",
  HOST: "host where reply workers set",
  NETWORK_URL: `blockchain rpc`,
  SERVER_PRIVATE_KEY: "private key with server role to hyperpayment smartcontracts",
  OPENSOURCE_HYPERPAYMENT_SPEC_ID: "specification id in smartcontract"
};
function getEnvVar(name) {
  const value = process.env[name];
  if (value === void 0) {
    throw `${SAD} Please set '${name}' (${envDescriptions[name]}) environment variable`;
  }
  return value;
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const sock = new libExports.Request({
  receiveTimeout: 3e4
  // 30 second timeout
});
const host = getEnvVar(EnvVar.HOST);
const port = getEnvVar(EnvVar.PORT);
sock.connect(`tcp://${host}:${port}`);
let isSending = false;
const sendQueue = [];
async function processQueue() {
  if (isSending || sendQueue.length === 0) {
    return;
  }
  isSending = true;
  const { req, resolve, reject } = sendQueue.shift();
  try {
    await sock.send(JSON.stringify(req));
    const [result] = await sock.receive();
    const reply = JSON.parse(result.toString());
    resolve(reply);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    if (errorMessage.includes("ENOENT") || errorMessage.includes("ECONNREFUSED") || errorMessage.includes("not connected")) {
      try {
        sock.disconnect(`tcp://${host}:${port}`);
      } catch (e) {
      }
      try {
        sock.connect(`tcp://${host}:${port}`);
        await new Promise((resolve2) => setTimeout(resolve2, 200));
        await sock.send(JSON.stringify(req));
        const [result] = await sock.receive();
        const reply = JSON.parse(result.toString());
        resolve(reply);
        return;
      } catch (retryError) {
        console.error(`::: ZeroMQ Client: Reconnection failed:`, retryError);
      }
    }
    if (errorMessage.includes("timeout") || errorMessage.includes("ETIMEDOUT")) {
      reject(new Error(`Request to blockchain gateway timed out after 30 seconds for command: ${req.cmd}`));
    } else {
      reject(new Error(`Failed to communicate with payment gateway server at ${host}:${port}: ${errorMessage}`));
    }
  } finally {
    isSending = false;
    if (sendQueue.length > 0) {
      processQueue();
    }
  }
}
async function send(req) {
  return new Promise((resolve, reject) => {
    sendQueue.push({ req, resolve, reject });
    processQueue();
  });
}

export { EnvVar as E, sleep as a, getEnvVar as g, send as s };
