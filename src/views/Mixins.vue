<script>
import exp from 'constants';
import ApiMixin from '../api.js';
export default {
    mixins: [ApiMixin],     //사용할 믹스인 파일을 배열로 등록
    data(){
        return {
            productList: []
        };
    },
    async mounted(){
        this.productList = await this.$callAPI("https://2f73c42f-442e-4875-92cb-bc654f6e3b95.mock.pstmn.io/list", "get");
        console.log(this.productList);
    }
}
</script>