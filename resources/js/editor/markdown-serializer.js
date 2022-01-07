import {MarkdownSerializer, defaultMarkdownSerializer} from "prosemirror-markdown";
import {docToHtml} from "./util";

const nodes = defaultMarkdownSerializer.nodes;
const marks = defaultMarkdownSerializer.marks;

nodes.callout = function(state, node) {
    const html = docToHtml({ content: [node] });
    state.write(html);
    state.closeBlock();
};

const serializer = new MarkdownSerializer(nodes, marks);

export default serializer;