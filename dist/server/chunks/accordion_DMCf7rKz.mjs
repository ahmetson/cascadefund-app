import { jsx } from 'react/jsx-runtime';
import * as React from 'react';
import { Accordion as Accordion$1 } from 'radix-ui';
import { AnimatePresence, motion } from 'motion/react';
import { g as getStrictContext } from './Tooltip_1k3VND9a.mjs';

function useControlledState(props) {
  const { value, defaultValue, onChange } = props;
  const [state, setInternalState] = React.useState(
    value !== void 0 ? value : defaultValue
  );
  React.useEffect(() => {
    if (value !== void 0) setInternalState(value);
  }, [value]);
  const setState = React.useCallback(
    (next, ...args) => {
      setInternalState(next);
      onChange?.(next, ...args);
    },
    [onChange]
  );
  return [state, setState];
}

const [AccordionProvider, useAccordion] = getStrictContext("AccordionContext");
const [AccordionItemProvider, useAccordionItem] = getStrictContext("AccordionItemContext");
function Accordion(props) {
  const [value, setValue] = useControlledState({
    value: props?.value,
    defaultValue: props?.defaultValue,
    onChange: props?.onValueChange
  });
  return /* @__PURE__ */ jsx(AccordionProvider, { value: { value, setValue }, children: /* @__PURE__ */ jsx(
    Accordion$1.Root,
    {
      "data-slot": "accordion",
      ...props,
      onValueChange: setValue
    }
  ) });
}
function AccordionItem(props) {
  const { value } = useAccordion();
  const [isOpen, setIsOpen] = React.useState(
    value?.includes(props?.value) ?? false
  );
  React.useEffect(() => {
    setIsOpen(value?.includes(props?.value) ?? false);
  }, [value, props?.value]);
  return /* @__PURE__ */ jsx(AccordionItemProvider, { value: { isOpen, setIsOpen, value: props.value }, children: /* @__PURE__ */ jsx(Accordion$1.Item, { "data-slot": "accordion-item", ...props }) });
}
function AccordionHeader(props) {
  return /* @__PURE__ */ jsx(Accordion$1.Header, { "data-slot": "accordion-header", ...props });
}
function AccordionTrigger(props) {
  return /* @__PURE__ */ jsx(Accordion$1.Trigger, { "data-slot": "accordion-trigger", ...props });
}
function AccordionContent({
  keepRendered = false,
  transition = { type: "spring", stiffness: 150, damping: 22 },
  ...props
}) {
  const { isOpen } = useAccordionItem();
  return /* @__PURE__ */ jsx(AnimatePresence, { children: keepRendered ? /* @__PURE__ */ jsx(Accordion$1.Content, { asChild: true, forceMount: true, children: /* @__PURE__ */ jsx(
    motion.div,
    {
      "data-slot": "accordion-content",
      initial: { height: 0, opacity: 0, "--mask-stop": "0%" },
      animate: isOpen ? { height: "auto", opacity: 1, "--mask-stop": "100%" } : { height: 0, opacity: 0, "--mask-stop": "0%" },
      transition,
      style: {
        maskImage: "linear-gradient(black var(--mask-stop), transparent var(--mask-stop))",
        WebkitMaskImage: "linear-gradient(black var(--mask-stop), transparent var(--mask-stop))",
        overflow: "hidden"
      },
      ...props
    },
    "accordion-content"
  ) }) : isOpen && /* @__PURE__ */ jsx(Accordion$1.Content, { asChild: true, forceMount: true, children: /* @__PURE__ */ jsx(
    motion.div,
    {
      "data-slot": "accordion-content",
      initial: { height: 0, opacity: 0, "--mask-stop": "0%" },
      animate: { height: "auto", opacity: 1, "--mask-stop": "100%" },
      exit: { height: 0, opacity: 0, "--mask-stop": "0%" },
      transition,
      style: {
        maskImage: "linear-gradient(black var(--mask-stop), transparent var(--mask-stop))",
        WebkitMaskImage: "linear-gradient(black var(--mask-stop), transparent var(--mask-stop))",
        overflow: "hidden"
      },
      ...props
    },
    "accordion-content"
  ) }) });
}

export { Accordion as A, AccordionItem as a, AccordionHeader as b, AccordionTrigger as c, AccordionContent as d, useControlledState as u };
