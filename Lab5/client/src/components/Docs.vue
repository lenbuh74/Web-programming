<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12" style="padding-bottom: 70px;">
                    <h2 style="padding-bottom: 30px;"> Мои документы </h2>
                    <ul>
                        <li
                                v-for="doc in docs"
                                v-bind:key="doc._id">
                            <a href="# " v-on:click="openDoc(doc)" style="color: #008080; font-size: 20px">
                                {{doc.title}}
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <div style="padding-bottom: 30px;">
                    <img src="https://school-internat.by/assets/templates/school/images/article.png" width="150" height="150">
                    </div>
                    <button v-on:click="createDoc()" type="button" style="width: 200px; box-shadow: 6px 6px 5px; #999; background: #008080; color: #FFFFFF; border-radius: 10px; border: 1px solid #999;">Создать новый документ</button>
                </div>
            </div>
        </div>
        
    </div>

</template>

<script>
/* eslint-disable */
    export default {
        name: "Docs",
        props: ["docs", "openDoc", "createDoc"]
    }
</script>

<style scoped>

</style>