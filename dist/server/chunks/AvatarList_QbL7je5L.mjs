import { jsxs, jsx } from 'react/jsx-runtime';

const ProfileRating = ({ ratingType, lvl, maxLvl, top }) => {
  const getStarColor = (lvl2, maxLvl2) => {
    if (maxLvl2 <= 1) return "#FFD700";
    const colorProgress = (lvl2 - 1) / (maxLvl2 - 1);
    const hue = colorProgress * 60;
    const saturation = 100;
    const lightness = 50;
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  };
  const getTrophyColor = (top2) => {
    const topNumber = typeof top2 === "string" ? parseInt(top2, 10) : top2;
    if (topNumber <= 10) return "#dabb17";
    if (topNumber <= 50) return "#C0C0C0";
    if (topNumber <= 100) return "#CD7F32";
    return "#4CAF50";
  };
  const starColor = getStarColor(lvl, maxLvl);
  const trophyColor = getTrophyColor(top);
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-1 font-noto-sans", children: [
    /* @__PURE__ */ jsx("span", { className: "font-medium text-xl", style: { color: starColor }, children: "★" }),
    /* @__PURE__ */ jsx("span", { className: "-ml-0.5 mr-2", children: lvl }),
    /* @__PURE__ */ jsx("span", { className: "mr-2", style: { color: trophyColor }, children: "🏆" }),
    /* @__PURE__ */ jsx("span", { className: "-ml-1.5 mr-2 ", style: { color: trophyColor }, children: top }),
    /* @__PURE__ */ jsx("span", { className: "font-medium font-georgia", style: { color: trophyColor }, children: ratingType.charAt(0).toUpperCase() + ratingType.slice(1) })
  ] });
};

const AvatarList = ({
  contributors,
  showLastRating = false,
  maxVisible = 4
}) => {
  const visibleContributors = contributors.slice(0, maxVisible);
  const remainingCount = contributors.length - maxVisible;
  const lastContributor = contributors[contributors.length - 1];
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center -space-x-2", children: [
      visibleContributors.map((contributor, index) => /* @__PURE__ */ jsx(
        "img",
        {
          src: contributor.avatar,
          alt: contributor.name,
          className: "w-6 h-6 rounded-full border-2 border-white shadow-sm",
          referrerPolicy: "no-referrer"
        },
        contributor.uri
      )),
      remainingCount > 0 && /* @__PURE__ */ jsxs("div", { className: "w-6 h-6 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs font-medium text-gray-700", children: [
        "+",
        remainingCount
      ] })
    ] }),
    showLastRating && lastContributor?.rating && /* @__PURE__ */ jsx(ProfileRating, { ...lastContributor.rating })
  ] });
};

export { AvatarList as A, ProfileRating as P };
