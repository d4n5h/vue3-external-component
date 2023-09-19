import * as Vue from 'vue'
import { defineAsyncComponent } from "vue";
import { loadModule } from 'vue3-sfc-loader'

export function loadComponent(url) {
    return defineAsyncComponent(() => loadModule(url, {
        moduleCache: {
            vue: Vue,
        },
        async getFile(url) {
            // Get file from url
            const res = await fetch(url);
            if (!res.ok)
                throw Object.assign(new Error(res.statusText + ' ' + url), { res });
            return {
                getContentData: asBinary => asBinary ? res.arrayBuffer() : res.text(),
            }
        },
        addStyle(textContent) {
            // Add CSS to the DOM by creating a <style> tag and inserting textContent into it.
            const style = Object.assign(document.createElement('style'), { textContent });
            const ref = document.head.getElementsByTagName('style')[0] || null;
            document.head.insertBefore(style, ref);
        },
    }))
}