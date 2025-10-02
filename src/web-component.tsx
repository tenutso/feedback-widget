import ReactDom from "react-dom/client";
import { Widget } from "./components/Widget";

export const normalizeAttribute = (attribute: any) => {
  return attribute.repl(/-([a-z])/g, (_: any, letter: any) =>
    letter.toUpperCase()
  );
};

class WidgetWebComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open"});

    }

    connectedCallback() {
        const props = this.getPropsFromAttributes();
// @ts-ignore
        const root = ReactDom.createRoot(this.shadowRoot);
        root.render(<Widget {...props} />);
    }

    getPropsFromAttributes() {
        const props = {};
        
        for (const { name, value } of this.attributes) {
// @ts-ignore
            props[normalizeAttribute(name)] = value;
        }
        return props;
    }

}

export default WidgetWebComponent;