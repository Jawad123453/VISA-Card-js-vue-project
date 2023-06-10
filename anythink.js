const app=Vue.createApp({
  data(){
    return{
      imgchanger:["p1.jpg","p2.jpg","p3.jpg","p4.jpg","p5.jpg"],
      selectedimg:'',
      CardNumber:"",
      CardNumbermaxlength:16,
      fullthearray:[],
      CVVmaxlength:4,
      CVVNUmber:null,
      fliput:false,
      Monthof:"MM",
      Yearof:"YY",
      CardHodervalue:"",
    }
  },computed:{
    changeYearof(){
      if(this.Yearof !=="YY"){
       return this.Yearof.split("").slice(2,4).join("")
      }else{
        return this.Yearof
      }
    },
    CardHodervaluechange(){
      if(this.CardHodervalue.length > 25){
        return this.CardHodervalue.split("").slice(0,25).join("") + "..."
      }else{
        return this.CardHodervalue
      }
    }
  },
  methods: {
    lastreqest:function(e){
      e.preventDefault();
    },
    maxLengthCheck:function() {
      if(this.CVVNUmber.length > this.CVVmaxlength) {
        this.CVVNUmber = this.CVVNUmber.substring(0,this.CVVmaxlength);
      }
    },
    maxLengthCheck2:function(){
      if(this.CardNumber.length > this.CardNumbermaxlength) {
        this.CardNumber = this.CardNumber.substring(0,this.CardNumbermaxlength);
      }
      this.fullthearray=this.CardNumber.split("");
    }
  },mounted() {
    let randomx=Math.floor(Math.random()*this.imgchanger.length);
    return this.selectedimg=`linear-gradient(to bottom, rgba(0, 0, 0,0.5),rgba(0,0,0,0.5)),url("./imgs/${this.imgchanger[randomx]}")`
  },
})
app.mount(`#app`)