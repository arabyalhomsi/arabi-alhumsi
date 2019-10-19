<template>
    <div>
        sads
        <div class="Type">
            <input type="text"
                name="name"
                placeholder="Article, Album, ..."
                v-model="forms.addTypeForm.name">

            <button @click="addType()">add Type</button>
            <br>
            <br>


            <div v-for="(type, typeIndex) in types" v-bind:key="type.name">
                
                <div class="TypeHeader">
                    <h1>{{ type.name }}</h1>
                </div>
                <div class="TypeContent">
                    <div v-for="field in type.fields" v-bind:key="field.type">
                        <div class="Field">
                            <input type="text" name="" placeholder="">
                        </div>
                    </div>
                    <div class="FieldAdd">
                        <input type="text"
                            name=""
                            placeholder="field"
                            >
                        <button @click="addField(typeIndex)">add field</button>
                    </div>
                </div>

            </div>
            <!-- <div class="FieldForm" v-if="addFieldForm.show">
                <input type="text" name="addFieldForm.type" placeholder="Title, Image">
                <input type="text" name="addFieldForm.value" placeholder="Lorem Ipsum">
                <button @click="addField()">add field</button>
            </div> -->

        </div>


    </div>
</template>

<script>
export default {
    name: 'ContentManager',
    data: () => ({
        types: [],
        forms: {
            addTypeForm: {
                name: '',

            },
            addField: []
        }
    }),
    methods: {
        addField(index) {
            this.forms.addField.push({
                
            })
            this.types[index].fields.push({
                type: addFieldForm.type,
                value: addFieldForm.value
            })
        },
        addType() {
            this.types.push({
                name: this.forms.addTypeForm.name,
                fields: []
            })
        }
    }

}
</script>
