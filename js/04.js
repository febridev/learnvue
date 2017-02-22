var V = new Vue({
	el : "#aplikasi",
	data : {
		nA : 0,
		nB : 0
	},
	computed: {
		hasilKali : function() 
		{
			return parseInt(this.nA)* parseInt(this.nB);
		},
		hasilBagi : function()
		{
			return parseInt(this.nA)/ parseInt(this.nB);
		}
	}
})