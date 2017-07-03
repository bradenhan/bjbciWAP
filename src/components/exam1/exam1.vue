<template>
  <div class="exam1">
    <div class="member-info">
      <span class="avator">
          <img v-bind:src="userInfor.avator" alt="">
      </span>
      <h3> {{userInfor.name}}</h3>
      <h4>{{userInfor.duties}}</h4>
      <address>
        {{userInfor.address}}
      </address>
    </div>
  
  </div>
</template>

<style lang="less">
 @import '../../frontend/css/demo.less';
.member-info {
  padding: 0 0 0.5rem;
  border-top: 1px solid transparent;
  text-align: center; 
}

.member-info .avator {
  display: block;
  width: 5.0rem;
  height: 5.0rem;
  overflow: hidden;
  margin: 1.0rem auto 0;
 .rounded(50%); 
}

.member-info .avator img {
  display: block;
  width: 5.0rem;
  height: 5.0rem;
  .rounded(50%); 
}

.member-info h3 {
  height: 1.15rem;
  overflow: hidden;
  margin: 0.6rem 0 0;
  font-weight: normal;
  font-size: 0.9rem;
  line-height: 1.15rem;
}

.member-info h4 {
  height: 0.95rem;
  overflow: hidden;
  margin: 0.7rem 0 0;
  font-weight: normal;
  font-size: 0.7rem;
  line-height: 0.95rem;
}

.member-info address {
  display: block;
  margin: 0.4rem 0 0;
  font-style: normal;
  font-size: 0.6rem;
  line-height: 0.85rem;
}

.member-info address:before {
  content: '';
  display: inline-block;
  width: 0.475rem;
  height: 0.65rem;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAaCAYAAABVX2cEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAZNJREFUeNqslTFrAkEQhTdqHzBdKosICdgrpgx4kMYiaCAQk8r8gINASOdPsEsjSREwfWIRCNjERhB/gFiaMrY2Xt4eb+Vc5tZT8uCDdWb2ubs3t5cKgkD9F5mv5ztlaQ+cgxtwCg4Zn4Fv8AJ6INDBs9un1cSUZZQHA/AOahEjxXGNuQFr1xQ1K4IhKKnNKrG2KJnluPR9lVy6todjytlmeuNZtb2ynLsyK4OKY8IviVMFqysbs3pM0Q/wwAHxGJNUN2aekNSPvQo+OQ44rpqWsOQZs7yQHPBp2Royp4SWCs3SQnLmOCMplzZmUrLgMCvE/YE26wvJE9AQ4g3mbIUeGdAFV0JBBxyDN/6+BPcxq+0asw8wAUfCOTwQlyb0CLe5BC21u1q4OZbR1+kVjHYwGnHu2rupnf0dzHyzKvsK6vPQk6pjd4J9OfobGjbaV77rctSag2YCsyZrnWaKj7ntMGqbVkhipticYyE+djRurNkCXFhbmTO22NZMawqu2TZLjqeug8xsOGj9WXuMjJ36E2AA/8iQNsPsPvYAAAAASUVORK5CYII=);
  background-size: 0.475rem 0.65rem;
  vertical-align: top;
}
</style>
<script>
export default {
  name: 'exam1',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      userInfor: {},
    }
  },
    created: function () {
        document.title = '个人详情页';  
        this.getUserDetail();
    },
    mounted : function () {   
    }, 
    methods: {
      getUserDetail: function () {
            if (DEVELOP) {
                var api = '/data/userDetail.json';
                this.$http.get(api).then(function (data) {
                    var res = data.body;
                    if (res.err_code == 0) {
                        this.userInfor = res.data;
                    }
                });
            } else {
                var api = '/h5/api.php?a=getGoodsList';
                this.$http.get(api).then(function (data) {
                    var res = data.body;
                    if (res.err_code == 0) {
                        this.userInfor = res.data;
                    }
                });
            }
        }
    }
}
</script>