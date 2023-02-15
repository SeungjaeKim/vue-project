<template>
    <h1>Full Name : {{ fullName }}</h1>
    <button type="button" @click="changeFirstName">Change First Name</button>
</template>
<script>
    export default {
        data() {
            return {
                firstName: 'Seungjae',
                lastName: 'Kim',
                fullName: '',
            };
        },
        watch: {
            firstName(){
                this.fullName =  this.firstName + ' ' + this.lastName;
            },
            lastName(){
                this.fullName =  this.firstName + ' ' + this.lastName;
            }
        },
        methods: {
            changeFirstName(){
                this.firstName = 'Minchae';
            }
        }
    }
</script>