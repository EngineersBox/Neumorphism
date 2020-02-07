const editor = new EditorJS({
    holderId: "editor",
    tools: {
        header: Header,
        image: SimpleImage,
        warning: {
            class: Warning,
            inlineToolbar: true,
            shortcut: 'CMD+SHIFT+W',
            config: {
                titlePlaceholder: 'Title',
                messagePlaceholder: 'Message',
            },
        }
    }
});