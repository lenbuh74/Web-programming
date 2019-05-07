<template>
    <div class="container">
        <div class="row" style="padding-top: 70px;">
            <div class="col text-center" >
                <h2>Документ для редактирования</h2>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 p-3" id="title" style="font-size:20px;">
                <label for="title-input"> Название: </label>
                <input :value="curDoc.title" @input="updateTitle" id="title-input">
            </div>

            <div class="col-md-12 mt-8 mb-2 p-2" id="editor">
                <textarea :value="curDoc.markdown" @input="update" class="writer"></textarea>
                <div v-html="compilledMarkdown" class="ml-3 mapper align-content-center"></div>

            </div>
            <div class="col-md-12 mt-8 mb-2 p-2">
                <button v-on:click="saveDoc(curDoc)" style="width: 200px; box-shadow: 6px 6px 5px; #999; background: #008000; color: #FFFFFF; border-radius: 10px; border: 1px solid #999;">Сохранить</button>
                <button v-on:click="deleteDoc(curDoc)" style="width: 200px; box-shadow: 6px 6px 5px; #999; background: #800000; color: #FFFFFF; border-radius: 10px; border: 1px solid #999;">Удалить</button>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
    import marked from "marked";
    import _ from "lodash";

    export default {
        name: "Markdown",
        props: ["curDoc", "saveDoc", "deleteDoc"],
        data() {
            if (this.curDoc) {
                return {
                    _id: this.curDoc._id,
                    curMarkdown: this.curDoc.markdown,
                    curTitle: this.curDoc.title
                }
            } else {
                return {
                    _id: 0,
                    curMarkdown: "# hello",
                    curTitle: "Hello"
                }
            }
        }
        ,
        computed: {
            compilledMarkdown: function () {
                return marked(this.curDoc.markdown, {sanitize: true})
            }
        }
        ,
        methods: {
            update: _.debounce(function (e) {
                this.curDoc.markdown = e.target.value;
            }, 500),
            updateTitle: _.debounce(function (e) {
                this.curDoc.title = e.target.value;
            }, 500),
        }
        // watch: {
        //     this._id = this.curDoc._id;
        // }
    }
</script>

<style scoped>
    .mapper {
        border: #008080 medium solid;
    }

    .writer {
        height: 500px;
        font-size: 20px;
    }

    textarea, #editor div {
        display: inline-block;
        width: 49%;
        height: 100%;
        vertical-align: top;
        box-sizing: border-box;
        padding: 0 20px;
    }

    textarea {
        border: none;
        height: 400px;
        border: 1px solid #008080;
        resize: none;
        outline: none;
        background-color: #d9e0e0;
        font-size: 16px;
        font-family: monospace;
        padding: 20px;
    }

    html, body, #editor {
        margin: 0;
        font-family: 'Roboto';
        font-size: 18px;
        color: #333;
    }

    code {
        color: #f66;
    }

</style>