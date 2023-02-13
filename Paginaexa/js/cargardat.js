var cmb1_1=["INFORMACIÓN 1"];
var cmb1_2=["INFORMACIÓN 2"];
var cmb1_3=["INFORMACIÓN 3"];
var cmb1_4=["INFORMACIÓN 4"];
var cmb1_5=["INFORMACIÓN 5"];

var cmb2_1=["PROYECTO 1"];
var cmb2_2=["PROYECTO 2"];
var cmb2_3=["PROYECTO 3"];
var cmb2_4=["PROYECTO 4"];
var cmb2_5=["PROYECTO 5"];


function cadenacmb22(){
   var dpt
   dpt = document.getElementById('cmb1').value	
   //console.log(dpt)
   
   if (dpt!=0) { 
      sdoc=eval("cmb1_"+dpt) 
 	   numdoc = sdoc.length 
      document.f1.cmb2.length = numdoc 
      for(i=0;i<numdoc;i++){ 
         document.f1.cmb2.options[i].value=sdoc[i] 
         document.f1.cmb2.options[i].text=sdoc[i] 
      }	

      sdoc2=eval("cmb2_"+dpt) 
      numdoc2 = sdoc2.length
      document.f1.cmb3.length = numdoc2 
      for(i=0;i<numdoc2;i++){ 
         document.f1.cmb3.options[i].value=sdoc2[i] 
         document.f1.cmb3.options[i].text=sdoc2[i] 
      }  
   }
}

function buscar(){
   var dt2
   dt2 = document.getElementById('cmb1').value
   //console.log(dt2)
   
   if (dt2 ==1) {
      let tt=document.getElementById("tt1").textContent;
      let pe=document.getElementById("pe1").textContent;
      let sn=document.getElementById("sn1").textContent;
      $('#tr1').show();
      $('#tr2').hide();
      $('#tr3').hide();
      $('#tr4').hide();
      $('#tr5').hide();
      Inp1.value = tt;
      Ej1.textContent = pe;
      Noej1.textContent = sn;

      ejercido =  (pe * 100) / tt;
      noejercido = (sn * 100) /tt;
      Inp2.value = ejercido;
      Inp3.value = noejercido;
   }else if(dt2==2) {
      let tt=document.getElementById("tt2").textContent;
      let pe=document.getElementById("pe2").textContent;
      let sn=document.getElementById("sn2").textContent;
      $('#tr2').show();
      $('#tr1').hide();
      $('#tr3').hide();
      $('#tr4').hide();
      $('#tr5').hide();
      Inp1.value = tt;
      Ej1.textContent = pe;
      Noej1.textContent = sn;

      ejercido =  (pe * 100) / tt;
      noejercido = (sn * 100) /tt;
      Inp2.value = ejercido;
      Inp3.value = noejercido;
   }else if(dt2==3) {
      let tt=document.getElementById("tt3").textContent;
      let pe=document.getElementById("pe3").textContent;
      let sn=document.getElementById("sn3").textContent;
      $('#tr3').show();
      $('#tr1').hide();
      $('#tr2').hide();
      $('#tr4').hide();
      $('#tr5').hide();
      Inp1.value = tt;
      Ej1.textContent = pe;
      Noej1.textContent = sn;

      ejercido =  (pe * 100) / tt;
      noejercido = (sn * 100) /tt;
      Inp2.value = ejercido;
      Inp3.value = noejercido;
      window.alert('LA BÚSQUEDA PARA ESTA SECRETARÍA, NO CUENTA CON CANTIDADES EN EL PRESUPUESTO');
   }else if(dt2==4) {
      let tt=document.getElementById("tt4").textContent;
      let pe=document.getElementById("pe4").textContent;
      let sn=document.getElementById("sn4").textContent;
      $('#tr4').show();
      $('#tr1').hide();
      $('#tr2').hide();
      $('#tr3').hide();
      $('#tr5').hide();
      Inp1.value = tt;
      Ej1.textContent = pe;
      Noej1.textContent = sn;

      ejercido =  (pe * 100) / tt;
      noejercido = (sn * 100) /tt;
      Inp2.value = ejercido;
      Inp3.value = noejercido;
   }else if(dt2==5) {
      let tt=document.getElementById("tt5").textContent;
      let pe=document.getElementById("pe5").textContent;
      let sn=document.getElementById("sn5").textContent;
      $('#tr5').show();
      $('#tr1').hide();
      $('#tr2').hide();
      $('#tr3').hide();
      $('#tr4').hide();
      Inp1.value = tt;
      Ej1.textContent = pe;
      Noej1.textContent = sn;

      ejercido =  (pe * 100) / tt;
      noejercido = (sn * 100) /tt;
      Inp2.value = ejercido;
      Inp3.value = noejercido;
      window.alert('LA BÚSQUEDA PARA ESTA SECRETARÍA, NO CUENTA CON CANTIDADES EN EL PRESUPUESTO');
   }else {
      window.alert('NECESITAS SELECCIONAR UNA SECRETARÍA');
   }
}

function limpiar(){
   document.getElementById("cmb1").value = '';
   }
