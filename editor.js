import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import LinkTool from '@editorjs/link';
import SimpleImage from '@editorjs/simple-image';
import CheckList from '@editorjs/checklist';
import Embed from '@editorjs/embed';
import Quote from '@editorjs/quote';

const editor = new EditorJS({
    holderId: "editor",
    tools: {
        header: Header,
        list: List,
        linkTool: {
            class: LinkTool,
            config: {
                endpoint: 'http://localhost:8008/fetchUrl', // Your backend endpoint for url data fetching
            }
        },
        image: SimpleImage,
        checklist: {
            class: CheckList,
            inlineToolbar: true,
        },
        embed: Embed,
        quote: Quote
    }
});