var V = new Vue({
	el : "#aplikasi",
	data : {
		newID : '',
		newNama : '',
		dataSiswa : []
	},
	methods : {
		tambahData : function(){
				var nID = this.newID;
				var nNama = this.newNama;
				this.dataSiswa.push({id:nID, nama: nNama});
				this.newID='';
				this.newNama='';
		},
		hapusData : function(index) {
				this.dataSiswa.splice(index,2);
		}
	}
});