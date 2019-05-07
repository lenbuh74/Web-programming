<template>
    <div id="app">
        <Docs v-bind:docs="docs"
              v-bind:openDoc="openDoc"
              v-bind:createDoc="createDoc"
        />
        <Markdown v-if="curDoc"
                  v-bind:curDoc="curDoc"
                  v-bind:saveDoc="saveDoc"
                  v-bind:deleteDoc="deleteDoc"
        />
    </div>
</template>

<script>
/* eslint-disable */
    import Docs from './components/Docs'
    import Markdown from './components/Markdown.vue';
    import {API} from './services/api'

    export default {
        name: 'app',
        components: {
            Docs,
            Markdown
        },
        data: function () {
            return {
                docs: [],
                curDoc: null
            }
        },
        created:
            async function () {
                const response = await API.get('/docs');
                this.docs = response.data.docs;
                this.curDoc = this.docs[0];
            },
        methods: {
            openDoc(doc) {
                this.curDoc = doc;
            },
            async saveDoc(doc) {
                const id = doc._id;
                const res = await API.put('/docs/' + id, {
                    title: doc.title,
                    markdown: doc.markdown
                });
                let index;
                for (let i = 0; i < this.docs.length; i++) {
                    if (this.docs[i]._id === doc._id) {
                        index = i;
                        break;
                    }
                }
                this.docs.splice(index, 1, res.data.result);
                this.curDoc = res.data.result;
                
            },
            async createDoc() {
                const response = await API.post('/doc', {
                    title: 'Document',
                    markdown: 'Text'
                });
                this.docs.push(response.data.result);
                this.curDoc = response.data.result;
            },
            async deleteDoc(doc) {
                await API.delete(/docs/ + doc._id);

                let index;
                for (let i = 0; i < this.docs.length; i++) {
                    if (this.docs[i]._id === doc._id) {
                        index = i;
                        break;
                    }
                }
                this.docs.splice(index, 1);
                this.curDoc = this.docs[0];


            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Room';
        text-align: center;
        margin-top: 75px;
    }
</style>
