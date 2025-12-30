import { jsx, jsxs } from 'react/jsx-runtime';
import { c as cn, g as getIcon, C as Component$1 } from './Analytics_DTGhDLP0.mjs';
import { C as Component } from './Tooltip_1k3VND9a.mjs';
import NumberFlow from '@number-flow/react';
import * as React from 'react';

const AuthStar = ({
  src,
  email,
  alt,
  className,
  imgClassName = "",
  uri = "/star",
  nickname = "Ahmetson",
  sunshines,
  stars,
  role,
  star,
  starId,
  noLink = false
}) => {
  const finalSrc = src;
  const finalAlt = alt || "Avatar";
  const finalNickname = nickname;
  const finalSunshines = star?.sunshines ?? sunshines;
  const finalStars = star?.stars ?? stars;
  const finalRole = star?.role || role;
  const defaultSrc = "https://api.backdropbuild.com/storage/v1/object/public/avatars/9nFM8HasgS.jpeg";
  const profileUri = `${uri}?id=${starId || star?._id || ""}`;
  const tooltipContent = /* @__PURE__ */ jsx("div", { className: "text-sm space-y-2", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        src: finalSrc || defaultSrc,
        alt: finalAlt,
        className: "w-12 h-12 rounded-full"
      }
    ),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ jsx("span", { className: "font-medium", children: finalNickname }),
        finalRole && /* @__PURE__ */ jsx("span", { className: cn(
          "text-xs text-white px-1.5 py-0.5 rounded",
          finalRole === "maintainer" && "bg-blue-500",
          finalRole === "user" && "bg-green-500",
          finalRole === "contributor" && "bg-purple-500"
        ), children: finalRole.charAt(0).toUpperCase() + finalRole.slice(1) })
      ] }),
      (finalSunshines !== void 0 || finalStars !== void 0) && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mt-1", children: [
        finalSunshines !== void 0 && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
          getIcon({ iconType: "sunshine", className: "w-4 h-4" }),
          /* @__PURE__ */ jsx(
            NumberFlow,
            {
              value: finalSunshines,
              locales: "en-US",
              format: { style: "decimal", maximumFractionDigits: 0 },
              className: "text-xs"
            }
          )
        ] }),
        finalStars !== void 0 && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
          getIcon({ iconType: "star", className: "w-4 h-4" }),
          /* @__PURE__ */ jsx(
            NumberFlow,
            {
              value: finalStars,
              locales: "en-US",
              format: { style: "decimal", maximumFractionDigits: 2 },
              className: "text-xs"
            }
          )
        ] })
      ] })
    ] })
  ] }) });
  const avatarContent = /* @__PURE__ */ jsx(
    "img",
    {
      src: finalSrc || defaultSrc,
      alt: finalAlt,
      width: 32,
      height: 32,
      className: `w-full h-full rounded-full object-cover ${imgClassName}`,
      style: { minWidth: "28px", minHeight: "28px" }
    }
  );
  return /* @__PURE__ */ jsx(Component, { content: tooltipContent, children: noLink ? /* @__PURE__ */ jsx("div", { className: `bg-blue-200 dark:bg-blue-400 rounded-full h-8 w-8 flex items-center justify-center overflow-hidden ${className}`, children: avatarContent }) : /* @__PURE__ */ jsx(Component$1, { uri: profileUri, className: `hover:bg-teal-300 bg-blue-200 dark:bg-blue-400 rounded-full h-8 w-8 flex items-center justify-center overflow-hidden ${className}`, children: avatarContent }) });
};

var EN_US = ['second', 'minute', 'hour', 'day', 'week', 'month', 'year'];
function en_US (diff, idx) {
    if (idx === 0)
        return ['just now', 'right now'];
    var unit = EN_US[Math.floor(idx / 2)];
    if (diff > 1)
        unit += 's';
    return [diff + " " + unit + " ago", "in " + diff + " " + unit];
}

var ZH_CN = ['秒', '分钟', '小时', '天', '周', '个月', '年'];
function zh_CN (diff, idx) {
    if (idx === 0)
        return ['刚刚', '片刻后'];
    var unit = ZH_CN[~~(idx / 2)];
    return [diff + " " + unit + "\u524D", diff + " " + unit + "\u540E"];
}

/**
 * Created by hustcc on 18/5/20.
 * Contract: i@hust.cc
 */
/**
 * All supported locales
 */
var Locales = {};
/**
 * register a locale
 * @param locale
 * @param func
 */
var register = function (locale, func) {
    Locales[locale] = func;
};
/**
 * get a locale, default is en_US
 * @param locale
 * @returns {*}
 */
var getLocale = function (locale) {
    return Locales[locale] || Locales['en_US'];
};

/**
 * Created by hustcc on 18/5/20.
 * Contract: i@hust.cc
 */
var SEC_ARRAY = [
    60,
    60,
    24,
    7,
    365 / 7 / 12,
    12,
];
/**
 * format Date / string / timestamp to timestamp
 * @param input
 * @returns {*}
 */
function toDate(input) {
    if (input instanceof Date)
        return input;
    // @ts-ignore
    if (!isNaN(input) || /^\d+$/.test(input))
        return new Date(parseInt(input));
    input = (input || '')
        // @ts-ignore
        .trim()
        .replace(/\.\d+/, '') // remove milliseconds
        .replace(/-/, '/')
        .replace(/-/, '/')
        .replace(/(\d)T(\d)/, '$1 $2')
        .replace(/Z/, ' UTC') // 2017-2-5T3:57:52Z -> 2017-2-5 3:57:52UTC
        .replace(/([+-]\d\d):?(\d\d)/, ' $1$2'); // -04:00 -> -0400
    return new Date(input);
}
/**
 * format the diff second to *** time ago, with setting locale
 * @param diff
 * @param localeFunc
 * @returns
 */
function formatDiff(diff, localeFunc) {
    /**
     * if locale is not exist, use defaultLocale.
     * if defaultLocale is not exist, use build-in `en`.
     * be sure of no error when locale is not exist.
     *
     * If `time in`, then 1
     * If `time ago`, then 0
     */
    var agoIn = diff < 0 ? 1 : 0;
    /**
     * Get absolute value of number (|diff| is non-negative) value of x
     * |diff| = diff if diff is positive
     * |diff| = -diff if diff is negative
     * |0| = 0
     */
    diff = Math.abs(diff);
    /**
     * Time in seconds
     */
    var totalSec = diff;
    /**
     * Unit of time
     */
    var idx = 0;
    for (; diff >= SEC_ARRAY[idx] && idx < SEC_ARRAY.length; idx++) {
        diff /= SEC_ARRAY[idx];
    }
    /**
     * Math.floor() is alternative of ~~
     *
     * The differences and bugs:
     * Math.floor(3.7) -> 4 but ~~3.7 -> 3
     * Math.floor(1559125440000.6) -> 1559125440000 but ~~1559125440000.6 -> 52311552
     *
     * More information about the performance of algebraic:
     * https://www.youtube.com/watch?v=65-RbBwZQdU
     */
    diff = Math.floor(diff);
    idx *= 2;
    if (diff > (idx === 0 ? 9 : 1))
        idx += 1;
    return localeFunc(diff, idx, totalSec)[agoIn].replace('%s', diff.toString());
}
/**
 * calculate the diff second between date to be formatted an now date.
 * @param date
 * @param relativeDate
 * @returns {number}
 */
function diffSec(date, relativeDate) {
    var relDate = relativeDate ? toDate(relativeDate) : new Date();
    return (+relDate - +toDate(date)) / 1000;
}
/**
 * nextInterval: calculate the next interval time.
 * - diff: the diff sec between now and date to be formatted.
 *
 * What's the meaning?
 * diff = 61 then return 59
 * diff = 3601 (an hour + 1 second), then return 3599
 * make the interval with high performance.
 **/
function nextInterval(diff) {
    var rst = 1, i = 0, d = Math.abs(diff);
    for (; diff >= SEC_ARRAY[i] && i < SEC_ARRAY.length; i++) {
        diff /= SEC_ARRAY[i];
        rst *= SEC_ARRAY[i];
    }
    d = d % rst;
    d = d ? rst - d : rst;
    return Math.ceil(d);
}

/**
 * format a TDate into string
 * @param date
 * @param locale
 * @param opts
 */
var format = function (date, locale, opts) {
    // diff seconds
    var sec = diffSec(date, opts && opts.relativeDate);
    // format it with locale
    return formatDiff(sec, getLocale(locale));
};

var ATTR_TIMEAGO_TID = 'timeago-id';
/**
 * get the datetime attribute, `datetime` are supported.
 * @param node
 * @returns {*}
 */
function getDateAttribute(node) {
    return node.getAttribute('datetime');
}
/**
 * set the node attribute, native DOM
 * @param node
 * @param timerId
 * @returns {*}
 */
function setTimerId(node, timerId) {
    // @ts-ignore
    node.setAttribute(ATTR_TIMEAGO_TID, timerId);
}
/**
 * get the timer id
 * @param node
 */
function getTimerId(node) {
    return parseInt(node.getAttribute(ATTR_TIMEAGO_TID));
}

// all realtime timer
var TIMER_POOL = {};
/**
 * clear a timer from pool
 * @param tid
 */
var clear = function (tid) {
    clearTimeout(tid);
    delete TIMER_POOL[tid];
};
// run with timer(setTimeout)
function run(node, date, localeFunc, opts) {
    // clear the node's exist timer
    clear(getTimerId(node));
    var relativeDate = opts.relativeDate, minInterval = opts.minInterval;
    // get diff seconds
    var diff = diffSec(date, relativeDate);
    // render
    node.innerText = formatDiff(diff, localeFunc);
    var tid = setTimeout(function () {
        run(node, date, localeFunc, opts);
    }, Math.min(Math.max(nextInterval(diff), minInterval || 1) * 1000, 0x7fffffff));
    // there is no need to save node in object. Just save the key
    TIMER_POOL[tid] = 0;
    setTimerId(node, tid);
}
/**
 * cancel a timer or all timers
 * @param node - node hosting the time string
 */
function cancel(node) {
    // cancel one
    if (node)
        clear(getTimerId(node));
    // cancel all
    // @ts-ignore
    else
        Object.keys(TIMER_POOL).forEach(clear);
}
/**
 * render a dom realtime
 * @param nodes
 * @param locale
 * @param opts
 */
function render(nodes, locale, opts) {
    // by .length
    // @ts-ignore
    var nodeList = nodes.length ? nodes : [nodes];
    nodeList.forEach(function (node) {
        run(node, getDateAttribute(node), getLocale(locale), opts || {});
    });
    return nodeList;
}

/**
 * Created by hustcc on 18/5/20.
 * Contract: i@hust.cc
 */
register('en_US', en_US);
register('zh_CN', zh_CN);

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
/**
 * Convert input to a valid datetime string of <time> tag
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time
 * @param input
 * @returns datetime string
 */
var toDateTime = function (input) {
    // let date: Date = new Date();
    // if (input instanceof Date) {
    //   date = input;
    //   //@ts-ignore
    // } else if (!isNaN(input) || /^\d+$/.test(input)) {
    //   //@ts-ignore
    //   date = new Date(parseInt(input));
    // } else {
    //   date = new Date(input);
    // }
    // try {
    //   return date.toISOString();
    // } catch (e) {
    //   console.error('invalid datetime');
    //   return '';
    // }
    return '' + (input instanceof Date ? input.getTime() : input);
};
var TimeAgo = /** @class */ (function (_super) {
    __extends(TimeAgo, _super);
    function TimeAgo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dom = null;
        return _this;
    }
    TimeAgo.prototype.componentDidMount = function () {
        // fixed #6 https://github.com/hustcc/timeago-react/issues/6
        // to reduce the file size.
        // const { locale } = this.props;
        // if (locale !== 'en' && locale !== 'zh_CN') {
        //   timeago.register(locale, require('timeago.js/locales/' + locale));
        // }
        // render it.
        this.renderTimeAgo();
    };
    TimeAgo.prototype.componentDidUpdate = function () {
        this.renderTimeAgo();
    };
    TimeAgo.prototype.renderTimeAgo = function () {
        var _a = this.props, live = _a.live, datetime = _a.datetime, locale = _a.locale, opts = _a.opts;
        // cancel all the interval
        cancel(this.dom);
        // if is live
        if (live !== false) {
            // live render
            this.dom.setAttribute('datetime', toDateTime(datetime));
            render(this.dom, locale, opts);
        }
    };
    // remove
    TimeAgo.prototype.componentWillUnmount = function () {
        cancel(this.dom);
    };
    // for render
    TimeAgo.prototype.render = function () {
        var _this = this;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        var _a = this.props, datetime = _a.datetime; _a.live; var locale = _a.locale, opts = _a.opts, others = __rest(_a, ["datetime", "live", "locale", "opts"]);
        return (React.createElement("time", __assign({ ref: function (c) {
                _this.dom = c;
            } }, others), format(datetime, locale, opts)));
    };
    TimeAgo.defaultProps = {
        live: true,
        className: '',
    };
    return TimeAgo;
}(React.PureComponent));

export { AuthStar as A, TimeAgo as T };
