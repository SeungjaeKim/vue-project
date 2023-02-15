<template>
    <div>
        <PageTitle title="부모에서 자식으로 전달" ></PageTitle>
        <PageTitle :title="title"></PageTitle>
    </div>
</template>
<script>
    import PageTitle from '../components/PageTitle.vue'
    export default {
        components: {PageTitle},
        data(){
            return {
                title: '동적 데이터 전달',
            }
        }
    }

</script>