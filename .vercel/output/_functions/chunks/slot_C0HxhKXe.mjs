import { jsx } from 'react/jsx-runtime';
import * as React from 'react';
import { isMotionComponent, motion } from 'motion/react';
import { c as cn } from './utils_CRaJ9uIg.mjs';

function getStrictContext(name) {
  const Context = React.createContext(void 0);
  const Provider = ({
    value,
    children
  }) => /* @__PURE__ */ jsx(Context.Provider, { value, children });
  const useSafeContext = () => {
    const ctx = React.useContext(Context);
    if (ctx === void 0) {
      throw new Error(`useContext must be used within ${name ?? "a Provider"}`);
    }
    return ctx;
  };
  return [Provider, useSafeContext];
}

function mergeRefs(...refs) {
  return (node) => {
    refs.forEach((ref) => {
      if (!ref) return;
      if (typeof ref === "function") {
        ref(node);
      } else {
        ref.current = node;
      }
    });
  };
}
function mergeProps(childProps, slotProps) {
  const merged = { ...childProps, ...slotProps };
  if (childProps.className || slotProps.className) {
    merged.className = cn(
      childProps.className,
      slotProps.className
    );
  }
  if (childProps.style || slotProps.style) {
    merged.style = {
      ...childProps.style,
      ...slotProps.style
    };
  }
  return merged;
}
function Slot({
  children,
  ref,
  ...props
}) {
  const isAlreadyMotion = typeof children.type === "object" && children.type !== null && isMotionComponent(children.type);
  const Base = React.useMemo(
    () => isAlreadyMotion ? children.type : motion.create(children.type),
    [isAlreadyMotion, children.type]
  );
  if (!React.isValidElement(children)) return null;
  const { ref: childRef, ...childProps } = children.props;
  const mergedProps = mergeProps(childProps, props);
  return /* @__PURE__ */ jsx(Base, { ...mergedProps, ref: mergeRefs(childRef, ref) });
}

export { Slot as S, getStrictContext as g };
