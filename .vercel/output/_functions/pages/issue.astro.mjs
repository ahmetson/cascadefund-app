import { i as createComponent, j as createAstro, w as renderComponent, r as renderTemplate } from '../chunks/astro/server_fdX1SiYK.mjs';
import { $ as $$PanelViewLayout } from '../chunks/PanelViewLayout_Bt8c-AIX.mjs';
import { B as BackButton } from '../chunks/BackButton_DL5Gz7SV.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { B as BasePanel } from '../chunks/Panel_CqTuM3BW.mjs';
import '../chunks/accordion_CHQBqGdC.mjs';
import 'clsx';
import { TheaterIcon } from 'lucide-react';
import { g as getIcon, C as Component } from '../chunks/eventTypes_PbqAZmEg.mjs';
import { B as Button, P as PanelAction } from '../chunks/PanelAction_DPZy3U8T.mjs';
import { B as Badge } from '../chunks/Badge_B8Esv6UX.mjs';
import { E as Editable } from '../chunks/Editable_-ZF1-7I4.mjs';
import { useEditorState } from '@tiptap/react';
import { I as InfoPanel } from '../chunks/InfoPanel_BEeHNdQh.mjs';
import { C as Component$1 } from '../chunks/Tooltip_w0cA3QON.mjs';
import { g as getIssueStatIcon } from '../chunks/utils_gmanUkFe.mjs';
import { M as MenuAvatar, T as TimeAgo, P as PanelFooter, F as Followings } from '../chunks/timeago-react_DjRt9YuX.mjs';
import { S as Spinner } from '../chunks/index_1nmfEu_R.mjs';
import { K as Kbd } from '../chunks/Kbd_BAMFwbIi.mjs';
import { d as actions, a as ISSUE_EVENT_TYPES } from '../chunks/issue_CKSMgj7X.mjs';
import { g as getDemo, a as getUserById } from '../chunks/user_DywsuUsD.mjs';
import { g as getIssueById } from '../chunks/issue_D6xZciY4.mjs';
import { ObjectId } from 'mongodb';
import { M as MenuName } from '../chunks/gradient_BwWwSSvf.mjs';
export { renderers } from '../renderers.mjs';

function MenuBar({ editor, className = "" }) {
  const editorState = useEditorState({
    editor,
    selector: (ctx) => {
      return {
        isBold: ctx.editor.isActive("bold") ?? false,
        canBold: ctx.editor.can().chain().toggleBold().run() ?? false,
        isItalic: ctx.editor.isActive("italic") ?? false,
        canItalic: ctx.editor.can().chain().toggleItalic().run() ?? false,
        isStrike: ctx.editor.isActive("strike") ?? false,
        canStrike: ctx.editor.can().chain().toggleStrike().run() ?? false,
        isCode: ctx.editor.isActive("code") ?? false,
        canCode: ctx.editor.can().chain().toggleCode().run() ?? false,
        canClearMarks: ctx.editor.can().chain().unsetAllMarks().run() ?? false,
        isParagraph: ctx.editor.isActive("paragraph") ?? false,
        isHeading1: ctx.editor.isActive("heading", { level: 1 }) ?? false,
        isHeading2: ctx.editor.isActive("heading", { level: 2 }) ?? false,
        isHeading3: ctx.editor.isActive("heading", { level: 3 }) ?? false,
        isHeading4: ctx.editor.isActive("heading", { level: 4 }) ?? false,
        isHeading5: ctx.editor.isActive("heading", { level: 5 }) ?? false,
        isHeading6: ctx.editor.isActive("heading", { level: 6 }) ?? false,
        isBulletList: ctx.editor.isActive("bulletList") ?? false,
        isOrderedList: ctx.editor.isActive("orderedList") ?? false,
        isCodeBlock: ctx.editor.isActive("codeBlock") ?? false,
        isBlockquote: ctx.editor.isActive("blockquote") ?? false,
        canUndo: ctx.editor.can().chain().undo().run() ?? false,
        canRedo: ctx.editor.can().chain().redo().run() ?? false
      };
    }
  });
  return /* @__PURE__ */ jsx(InfoPanel, { className, children: /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap flex-row justify-start items-center gap-1 w-full", children: [
    /* @__PURE__ */ jsx(
      Button,
      {
        variant: "secondary",
        onClick: () => {
          editor.chain().focus().toggleBold().run();
        },
        disabled: !editorState.canBold,
        className: "w-10 h-10" + editorState.isBold ? "is-active" : "",
        children: "Bold"
      }
    ),
    /* @__PURE__ */ jsx(
      Button,
      {
        variant: "secondary",
        onClick: () => editor.chain().focus().toggleItalic().run(),
        disabled: !editorState.canItalic,
        className: "w-10 h-10" + editorState.isItalic ? "is-active" : "",
        children: "Italic"
      }
    ),
    /* @__PURE__ */ jsx(
      Button,
      {
        variant: "secondary",
        onClick: () => editor.chain().focus().toggleStrike().run(),
        disabled: !editorState.canStrike,
        className: "w-10 h-10" + editorState.isStrike ? "is-active" : "",
        children: "Strike"
      }
    ),
    /* @__PURE__ */ jsx(
      Button,
      {
        variant: "secondary",
        onClick: () => editor.chain().focus().toggleCode().run(),
        disabled: !editorState.canCode,
        className: "w-10 h-10" + editorState.isCode ? "is-active" : "",
        children: "Code"
      }
    ),
    /* @__PURE__ */ jsx(Button, { variant: "secondary", onClick: () => editor.chain().focus().unsetAllMarks().run(), children: "Clear marks" }),
    /* @__PURE__ */ jsx(Button, { variant: "secondary", onClick: () => editor.chain().focus().clearNodes().run(), children: "Clear nodes" }),
    /* @__PURE__ */ jsx(
      Button,
      {
        variant: "secondary",
        onClick: () => editor.chain().focus().setParagraph().run(),
        className: "w-10 h-10" + editorState.isParagraph ? "is-active" : "",
        children: "Paragraph"
      }
    ),
    /* @__PURE__ */ jsx(
      Button,
      {
        onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
        className: "w-10 h-10" + editorState.isHeading1 ? "is-active" : "",
        children: "H1"
      }
    ),
    /* @__PURE__ */ jsx(
      Button,
      {
        onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
        className: "w-10 h-10" + editorState.isHeading2 ? "is-active" : "",
        children: "H2"
      }
    ),
    /* @__PURE__ */ jsx(
      Button,
      {
        onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
        className: "w-10 h-10" + editorState.isHeading3 ? "is-active" : "",
        children: "H3"
      }
    ),
    /* @__PURE__ */ jsx(
      Button,
      {
        onClick: () => editor.chain().focus().toggleHeading({ level: 4 }).run(),
        className: "w-10 h-10" + editorState.isHeading4 ? "is-active" : "",
        children: "H4"
      }
    ),
    /* @__PURE__ */ jsx(
      Button,
      {
        onClick: () => editor.chain().focus().toggleHeading({ level: 5 }).run(),
        className: "w-10 h-10" + editorState.isHeading5 ? "is-active" : "",
        children: "H5"
      }
    ),
    /* @__PURE__ */ jsx(
      Button,
      {
        onClick: () => editor.chain().focus().toggleHeading({ level: 6 }).run(),
        className: "w-10 h-10" + editorState.isHeading6 ? "is-active" : "",
        children: "H6"
      }
    ),
    /* @__PURE__ */ jsx(
      Button,
      {
        onClick: () => editor.chain().focus().toggleBulletList().run(),
        className: "w-10 h-10" + editorState.isBulletList ? "is-active" : "",
        children: "Bullet list"
      }
    ),
    /* @__PURE__ */ jsx(
      Button,
      {
        onClick: () => editor.chain().focus().toggleOrderedList().run(),
        className: "w-10 h-10" + editorState.isOrderedList ? "is-active" : "",
        children: "Ordered list"
      }
    ),
    /* @__PURE__ */ jsx(
      Button,
      {
        onClick: () => editor.chain().focus().toggleCodeBlock().run(),
        className: "w-10 h-10" + editorState.isCodeBlock ? "is-active" : "",
        children: "Code block"
      }
    ),
    /* @__PURE__ */ jsx(
      Button,
      {
        onClick: () => editor.chain().focus().toggleBlockquote().run(),
        className: "w-10 h-10" + editorState.isBlockquote ? "is-active" : "",
        children: "Blockquote"
      }
    ),
    /* @__PURE__ */ jsx(Button, { onClick: () => editor.chain().focus().setHorizontalRule().run(), children: "Horizontal rule" }),
    /* @__PURE__ */ jsx(Button, { onClick: () => editor.chain().focus().setHardBreak().run(), children: "Hard break" }),
    /* @__PURE__ */ jsx(Button, { onClick: () => editor.chain().focus().undo().run(), disabled: !editorState.canUndo, children: "Undo" }),
    /* @__PURE__ */ jsx(Button, { onClick: () => editor.chain().focus().redo().run(), disabled: !editorState.canRedo, children: "Redo" })
  ] }) });
}

const YourProfileBadge = ({ saving = false, label = "profile" }) => {
  return /* @__PURE__ */ jsx(Badge, { variant: saving ? "info" : "gray", active: true, static: !saving, children: saving ? /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Spinner,
      {
        className: "w-5 h-5",
        variant: "ellipsis"
      },
      "ellipsis"
    ),
    " saving"
  ] }) : `Your ${label}` });
};

const EditableBadge = ({ showEditBar, setShowEditBar }) => {
  return /* @__PURE__ */ jsx(Badge, { variant: "gray", active: true, static: true, children: showEditBar ? /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-1", children: [
    /* @__PURE__ */ jsx(
      Kbd,
      {
        onPress: () => setShowEditBar(false),
        overwrittenChildren: "esc",
        children: "esc"
      }
    ),
    " ",
    " ",
    "cancel"
  ] }) : /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-1 px-1", children: [
    /* @__PURE__ */ jsx(Kbd, { onPress: () => setShowEditBar(true), overwrittenChildren: "ctrl+space", children: "ctrl" }),
    " +",
    /* @__PURE__ */ jsx(Kbd, { className: "mx-1", children: "space" }),
    " ",
    " show edit bar"
  ] }) });
};

const IssueContentPanel = ({
  actions: actionsProp,
  onSave,
  ...issue
}) => {
  const [issueData, setIssueData] = useState(issue);
  useEffect(() => {
    setIssueData(issue);
  }, [issue._id, issue.contributor, issue.author, issue.maintainer, issue.title, issue.description]);
  const issueNumber = issueData._id ? `#${issueData._id.slice(-6)}` : "#0";
  const primaryTag = issueData.tags && issueData.tags.length > 0 ? issueData.tags[0] : void 0;
  const issueType = primaryTag || "improvement";
  const isShiningIssue = issueData.sunshines > 0;
  const [authorUser, setAuthorUser] = useState(null);
  const [isLoadingAuthor, setIsLoadingAuthor] = useState(false);
  const [contributorUser, setContributorUser] = useState(null);
  const [isLoadingContributor, setIsLoadingContributor] = useState(false);
  const [maintainerUser, setMaintainerUser] = useState(null);
  const [isLoadingMaintainer, setIsLoadingMaintainer] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    if (issueData.author && typeof issueData.author === "string") {
      setIsLoadingAuthor(true);
      actions.getUserById({ userId: issueData.author }).then((result) => {
        if (result.data?.success && result.data.data) {
          setAuthorUser(result.data.data);
        }
      }).catch((error) => {
        console.error("Error fetching author:", error);
      }).finally(() => {
        setIsLoadingAuthor(false);
      });
    } else {
      setAuthorUser(null);
    }
  }, [issueData.author]);
  useEffect(() => {
    if (issueData.contributor && typeof issueData.contributor === "string") {
      setIsLoadingContributor(true);
      actions.getUserById({ userId: issueData.contributor }).then((result) => {
        if (result.data?.success && result.data.data) {
          setContributorUser(result.data.data);
        }
      }).catch((error) => {
        console.error("Error fetching contributor:", error);
      }).finally(() => {
        setIsLoadingContributor(false);
      });
    } else {
      setContributorUser(null);
    }
  }, [issueData.contributor]);
  useEffect(() => {
    if (issueData.maintainer && typeof issueData.maintainer === "string") {
      setIsLoadingMaintainer(true);
      actions.getUserById({ userId: issueData.maintainer }).then((result) => {
        if (result.data?.success && result.data.data) {
          setMaintainerUser(result.data.data);
        }
      }).catch((error) => {
        console.error("Error fetching maintainer:", error);
      }).finally(() => {
        setIsLoadingMaintainer(false);
      });
    } else {
      setMaintainerUser(null);
    }
  }, [issueData.maintainer]);
  useEffect(() => {
    const demo = getDemo();
    if (demo.email && demo.users && demo.role) {
      const user = demo.users.find((u) => u.role === demo.role) || demo.users[0];
      if (user && user._id) {
        getUserById(user._id.toString()).then((userData) => {
          if (userData) {
            setCurrentUser(userData);
          }
        }).catch((error) => {
          console.error("Error fetching current user:", error);
        });
      }
    }
  }, []);
  useEffect(() => {
    const handleIssueUpdate = async (event) => {
      const customEvent = event;
      setIssueData(customEvent.detail);
    };
    window.addEventListener(ISSUE_EVENT_TYPES.ISSUE_UPDATE, handleIssueUpdate);
    return () => {
      window.removeEventListener(ISSUE_EVENT_TYPES.ISSUE_UPDATE, handleIssueUpdate);
    };
  }, [issueData._id]);
  const isAuthor = currentUser && issueData.author && currentUser._id === issueData.author;
  const isMaintainer = currentUser?.role === "maintainer";
  const canEdit = isAuthor || isMaintainer;
  const [value, setValue] = useState({
    title: issueData.title,
    description: issueData.description,
    technicalRequirements: "<p>Implement unified OAuth client library</p><p>Create consistent token storage mechanism</p><p>Design user permission management interface</p><p>Develop automated token refresh process</p><p>Ensure GDPR compliance for all data transfers</p>"
  });
  useEffect(() => {
    setValue({
      title: issueData.title,
      description: issueData.description,
      technicalRequirements: value.technicalRequirements
      // Keep existing technical requirements
    });
  }, [issueData.title, issueData.description]);
  const [saving, setSaving] = useState(false);
  const [showEditBar, setShowEditBar] = useState(false);
  const [editor, setEditor] = useState(null);
  useEffect(() => {
    if (saving) {
      setTimeout(() => {
        setSaving(false);
      }, 2e3);
    }
  }, [saving]);
  const handleEdit = () => {
    alert("Heyya!");
  };
  const eventProps = {
    onActivate: () => {
      setShowEditBar(!showEditBar);
    },
    onCancel: () => {
      setShowEditBar(false);
    },
    onBlur: (id, e) => {
      if (e !== null) {
        const newContent = e.getHTML();
        if (value[id] !== newContent) {
          const updates = { ...value };
          updates[id] = newContent;
          setValue(updates);
          setSaving(true);
          if (onSave) {
            onSave({
              title: id === "title" ? e.getText() : void 0,
              description: id === "description" ? e.getText() : void 0,
              technicalRequirements: id === "technicalRequirements" ? newContent : void 0
            });
          }
        }
      }
    },
    onFocus: (id, nameEditor) => {
      setEditor(nameEditor);
    }
  };
  const nonShiningActions = /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-2 w-full", children: [
    /* @__PURE__ */ jsxs(Button, { onClick: () => console.log("Liked"), variant: "secondary", size: "sm", className: "h-7 px-2 text-xs w-full", children: [
      getIcon({ iconType: "likes", className: "w-3 h-3 mr-0.5" }),
      "Like"
    ] }),
    /* @__PURE__ */ jsxs(Button, { variant: "secondary", size: "sm", className: "h-7 px-2 text-xs w-full", children: [
      getIcon({ iconType: "likes", className: "w-3 h-3 mr-0.5" }),
      "Dislike"
    ] }),
    /* @__PURE__ */ jsxs(Button, { variant: "primary", size: "sm", className: "h-7 px-2 text-xs w-full", children: [
      getIcon({ iconType: "vote-priority", className: "w-3 h-3 mr-0.5" }),
      "Fund"
    ] })
  ] });
  const defaultActionClassName = " py-0 px-1 h-6 text-sm";
  const preparedActions = actionsProp ? actionsProp.map((action) => ({
    ...action,
    className: action.className ? action.className + defaultActionClassName : defaultActionClassName
  })) : [];
  const editAction = canEdit ? {
    icon: "settings",
    children: getIcon({ iconType: "settings", className: "w-4 h-4" }),
    onClick: handleEdit,
    className: defaultActionClassName
  } : null;
  return /* @__PURE__ */ jsxs(BasePanel, { className: `${saving && "cursor-progress"}`, children: [
    showEditBar && editor !== null && /* @__PURE__ */ jsx(
      MenuBar,
      {
        editor,
        className: "fixed top-0 left-0 right-0 h-28 z-999"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "w-16 overflow-hidden flex flex-col space-y-2 items-center", children: [
        /* @__PURE__ */ jsx(Component, { uri: issueData.uri, asNewTab: false, children: /* @__PURE__ */ jsx(Badge, { variant: "info", static: true, children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-1", children: [
          getIcon("cascadefund"),
          /* @__PURE__ */ jsx("span", { className: "text-xs font-medium", children: issueNumber })
        ] }) }) }),
        !isShiningIssue && nonShiningActions
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex-1 w-full", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 flex-1", children: [
            /* @__PURE__ */ jsx(
              Component$1,
              {
                openDelay: 2e3,
                content: /* @__PURE__ */ jsx("div", { className: "text-sm", children: canEdit ? "Title is editable for issue owners." : "Issue title" }),
                children: /* @__PURE__ */ jsxs("h1", { className: "text-xl font-bold text-gray-500 dark:text-slate-100 flex space-x-1 items-center gap-1", children: [
                  canEdit ? /* @__PURE__ */ jsx(
                    Editable,
                    {
                      id: "title",
                      content: value["title"] || "No title",
                      editable: !saving,
                      limit: 100,
                      className: "mt-0.5",
                      ...eventProps
                    }
                  ) : /* @__PURE__ */ jsx("div", { className: "mt-1", children: value["title"] || "No title" }),
                  canEdit ? /* @__PURE__ */ jsx(YourProfileBadge, { saving, label: "issue" }) : /* @__PURE__ */ jsx(Badge, { variant: "gray", static: true, children: "Not editable" }),
                  canEdit && /* @__PURE__ */ jsx(EditableBadge, { showEditBar, setShowEditBar })
                ] })
              }
            ),
            issueData.solarForgeTxid && /* @__PURE__ */ jsx(
              Component$1,
              {
                content: /* @__PURE__ */ jsx("div", { className: "text-sm", children: "View the Solar Forge by this issue on the blockchain explorer" }),
                children: /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: `https://sepolia.basescan.org/tx/${issueData.solarForgeTxid}`,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors",
                    children: /* @__PURE__ */ jsx(TheaterIcon, { className: "w-4 h-4" })
                  }
                )
              }
            ),
            /* @__PURE__ */ jsx(Badge, { variant: isShiningIssue ? "success" : "gray", static: true, children: isShiningIssue ? "Shining" : "Public Backlog" })
          ] }),
          /* @__PURE__ */ jsx(
            Badge,
            {
              variant: issueType === "bug" ? "danger" : issueType === "feature" ? "blue" : issueType === "improvement" ? "success" : issueType === "enhancement" ? "warning" : "info",
              static: true,
              children: issueType
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-slate-700 dark:text-slate-200 text-md mb-4 prose max-w-none", children: /* @__PURE__ */ jsx(
          Component$1,
          {
            openDelay: 2e3,
            content: /* @__PURE__ */ jsx("div", { className: "text-sm", children: canEdit ? "Description is editable for issue owners." : "Issue description" }),
            children: canEdit ? /* @__PURE__ */ jsx(
              Editable,
              {
                id: "description",
                content: value["description"] || "No description",
                editable: !saving,
                limit: 500,
                ...eventProps
              }
            ) : /* @__PURE__ */ jsx("p", { children: value["description"] || "No description" })
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "mb-4 text-slate-600 dark:text-slate-400 text-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg text-slate-700 dark:text-slate-300", children: "Technical Requirements" }),
          /* @__PURE__ */ jsx(
            Component$1,
            {
              openDelay: 2e3,
              content: /* @__PURE__ */ jsx("div", { className: "text-sm", children: canEdit ? "Technical requirements are editable for issue owners." : "Technical requirements" }),
              children: canEdit ? /* @__PURE__ */ jsx(
                Editable,
                {
                  id: "technicalRequirements",
                  content: value["technicalRequirements"],
                  editable: !saving,
                  limit: 1e3,
                  ...eventProps
                }
              ) : /* @__PURE__ */ jsx("div", { className: "prose max-w-none", dangerouslySetInnerHTML: { __html: value["technicalRequirements"] } })
            }
          )
        ] }),
        (contributorUser || maintainerUser || authorUser || issueData.createdTime) && /* @__PURE__ */ jsxs("div", { className: `flex items-center space-x-1 text-gray-500 gap-1 text-xs mb-2 ${contributorUser ? "justify-between" : "justify-end"}`, children: [
          contributorUser && maintainerUser && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx("span", { children: "Contributor" }),
              isLoadingContributor ? /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-400", children: "Loading..." }) : /* @__PURE__ */ jsx(
                MenuAvatar,
                {
                  src: contributorUser.src,
                  uri: contributorUser.uri,
                  className: "w-7! h-7!"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx("span", { children: "Maintainer" }),
              isLoadingMaintainer ? /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-400", children: "Loading..." }) : /* @__PURE__ */ jsx(
                MenuAvatar,
                {
                  src: maintainerUser.src,
                  uri: maintainerUser.uri,
                  className: "w-7! h-7!"
                }
              )
            ] })
          ] }),
          authorUser && /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsx("span", { children: "By" }),
            isLoadingAuthor ? /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-400", children: "Loading..." }) : /* @__PURE__ */ jsx(
              MenuAvatar,
              {
                src: authorUser.src,
                uri: authorUser.uri,
                className: "w-7! h-7!"
              }
            ),
            issueData.createdTime && /* @__PURE__ */ jsx(TimeAgo, { datetime: typeof issueData.createdTime === "number" ? issueData.createdTime * 1e3 : issueData.createdTime })
          ] }) })
        ] }),
        (issueData.stats || preparedActions.length > 0 || editAction || issueData.solarForgeTxid || isShiningIssue && issueData.sunshines > 0) && /* @__PURE__ */ jsxs(PanelFooter, { className: "flex flex-row justify-between items-center mt-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            preparedActions.length > 0 && /* @__PURE__ */ jsx(PanelAction, { className: "", actions: preparedActions }),
            editAction && /* @__PURE__ */ jsx(
              Component$1,
              {
                openDelay: 500,
                content: /* @__PURE__ */ jsx("div", { className: "text-sm", children: "Edit the issue" }),
                children: /* @__PURE__ */ jsx(
                  Button,
                  {
                    onClick: editAction.onClick,
                    className: editAction.className,
                    variant: editAction.variant,
                    children: editAction.children
                  }
                )
              }
            ),
            issueData.solarForgeTxid ? /* @__PURE__ */ jsx(
              Component$1,
              {
                content: /* @__PURE__ */ jsx("div", { className: "text-sm", children: "View solar forge transaction on blockchain explorer" }),
                children: /* @__PURE__ */ jsxs(
                  "a",
                  {
                    href: `https://sepolia.basescan.org/tx/${issueData.solarForgeTxid}`,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "inline-flex items-center gap-1 text-sm text-cyan-400 hover:text-cyan-300 transition-colors",
                    children: [
                      /* @__PURE__ */ jsx(TheaterIcon, { className: "w-4 h-4" }),
                      /* @__PURE__ */ jsx("span", { children: "Solar Forge" })
                    ]
                  }
                )
              }
            ) : isShiningIssue && issueData.sunshines > 0 ? /* @__PURE__ */ jsx(
              Component$1,
              {
                content: /* @__PURE__ */ jsx("div", { className: "text-sm", children: "Solar forge this issue to convert sunshines to stars" }),
                children: /* @__PURE__ */ jsxs("span", { className: "text-sm text-slate-500 dark:text-slate-400", children: [
                  /* @__PURE__ */ jsx(TheaterIcon, { className: "w-4 h-4 inline mr-1" }),
                  "Solar Forge"
                ] })
              }
            ) : null
          ] }),
          issueData.stats && Object.values(issueData.stats).map((stat, index) => /* @__PURE__ */ jsx(
            Followings,
            {
              triggerClassName: "text-sm",
              iconType: getIssueStatIcon(stat.type),
              hint: stat.hint,
              fill: stat.filled,
              children: stat.children
            },
            index.toString()
          ))
        ] })
      ] })
    ] })
  ] });
};

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const issueIdParam = Astro2.url.searchParams.get("id");
  const galaxyParam = Astro2.url.searchParams.get("galaxy");
  if (!issueIdParam) {
    return Astro2.redirect("/project/404?method=getIssueIdParam");
  }
  try {
    new ObjectId(issueIdParam);
  } catch (error) {
    return Astro2.redirect("/project/404?method=validateIssueId");
  }
  const issue = await getIssueById(issueIdParam);
  if (!issue) {
    return Astro2.redirect("/project/404?method=getIssueById");
  }
  const backUri = galaxyParam ? `/project/issues?galaxy=${galaxyParam}` : "/project/issues";
  return renderTemplate`${renderComponent($$result, "Layout", $$PanelViewLayout, { "hideLinks": Object.keys(MenuName) }, { "center": async ($$result2) => renderTemplate`${renderComponent($$result2, "IssuePanel", IssueContentPanel, { "slot": "center", ...issue, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/issue/IssuePanel", "client:component-export": "default" })}${renderComponent($$result2, "AssignToMeCTA", null, { "slot": "center", "client:only": "react", "issueId": issueIdParam, "client:component-hydration": "only", "client:component-path": "@/components/issue/AssignToMeCTA", "client:component-export": "default" })}`, "left": async ($$result2) => renderTemplate`${renderComponent($$result2, "BackButton", BackButton, { "slot": "left", "uri": backUri })}` })}`;
}, "/home/medet/ara-app/src/pages/issue/index.astro", void 0);

const $$file = "/home/medet/ara-app/src/pages/issue/index.astro";
const $$url = "/issue";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
