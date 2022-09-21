

function CalcularPc() {

   var CPU = document.getElementById('CPU')
var Velocity = document.getElementById('Velc')
var UsoCPU = document.getElementById('UsoCPU')
var Memory = document.getElementById('Memory')
var UsoMemory = document.getElementById('UsoMemory')
var Disk = document.getElementById('Disk')
var UsoDisk = document.getElementById('UsoDisk')


var CPU2 = document.getElementById('CPU2')
var Velocity2 = document.getElementById('Velc2')
var UsoCPU2 = document.getElementById('UsoCPU2')
var Memory2 = document.getElementById('Memory2')
var UsoMemory2 = document.getElementById('UsoMemory2')
var Disk2 = document.getElementById('Disk2')
var UsoDisk2 = document.getElementById('UsoDisk2')



var CPU3 = document.getElementById('CPU3')
var Velocity3 = document.getElementById('Velc3')
var UsoCPU3 = document.getElementById('UsoCPU3')
var Memory3 = document.getElementById('Memory3')
var UsoMemory3 = document.getElementById('UsoMemory3')
var Disk3 = document.getElementById('Disk3')
var UsoDisk3 = document.getElementById('UsoDisk3')



var CPU4 = document.getElementById('CPU4')
var Velocity4 = document.getElementById('Velc4')
var UsoCPU4 = document.getElementById('UsoCPU4')
var Memory4 = document.getElementById('Memory4')
var UsoMemory4 = document.getElementById('UsoMemory4')
var Disk4 = document.getElementById('Disk4')
var UsoDisk4 = document.getElementById('UsoDisk4')



var CPU5 = document.getElementById('CPU5')
var Velocity5 = document.getElementById('Velc5')
var UsoCPU5 = document.getElementById('UsoCPU5')
var Memory5 = document.getElementById('Memory5')
var UsoMemory5 = document.getElementById('UsoMemory5')
var Disk5 = document.getElementById('Disk5')
var UsoDisk5 = document.getElementById('UsoDisk5')

 /////////////////////////////////////////////////////////

    var CPU1 = Number(CPU.value)
    var Velocity1 = Number(Velocity.value)
    var UsoCPU1 = Number(UsoCPU.value)
    var Memory1 = Number(Memory.value)
    var UsoMemory1 = Number(UsoMemory.value)
    var Disk1 = Number(Disk.value)
    var UsoDisk1 = Number(UsoDisk.value)

    var CPU2 = Number(CPU2.value)
    var Velocity2 = Number(Velocity2.value)
    var UsoCPU2 = Number(UsoCPU2.value)
    var Memory2 = Number(Memory2.value)
    var UsoMemory2 = Number(UsoMemory2.value)
    var Disk2 = Number(Disk2.value)
    var UsoDisk2 = Number(UsoDisk2.value)


    var CPU3 = Number(CPU3.value)
    var Velocity3 = Number(Velocity3.value)
    var UsoCPU3 = Number(UsoCPU3.value)
    var Memory3 = Number(Memory3.value)
    var UsoMemory3 = Number(UsoMemory3.value)
    var Disk3 = Number(Disk3.value)
    var UsoDisk3 = Number(UsoDisk3.value)


    var CPU4 = Number(CPU4.value)
    var Velocity4 = Number(Velocity4.value)
    var UsoCPU4 = Number(UsoCPU4.value)
    var Memory4 = Number(Memory4.value)
    var UsoMemory4 = Number(UsoMemory4.value)
    var Disk4 = Number(Disk4.value)
    var UsoDisk4 = Number(UsoDisk4.value)


    var CPU5 = Number(CPU5.value)
    var Velocity5 = Number(Velocity5.value)
    var UsoCPU5 = Number(UsoCPU5.value)
    var Memory5 = Number(Memory5.value)
    var UsoMemory5 = Number(UsoMemory5.value)
    var Disk5 = Number(Disk5.value)
    var UsoDisk5 = Number(UsoDisk5.value)

    RVelocy.innerHTML = ''
    RMemory.innerHTML = ''
    RDisk.innerHTML = ''


         ////////////////////////???????? PC 1 ?????????////////////////////////////////////
        var calculoCPU = ((((CPU1 * Velocity1) * (UsoCPU1 / 100)) * 0.2) + ((CPU1 * Velocity1) * (UsoCPU1 / 100)))
        var calculoMemory = (((Memory1*(UsoMemory1 / 100)) * 0.2) + (Memory1*(UsoMemory1 / 100)))
        var calculoDisk = (((Disk1*(UsoDisk1 / 100)) * 0.2) + (Disk1*(UsoDisk1 / 100)))

        ////////////////////////???????? PC 1 ?????????////////////////////////////////////
        var calculoCPU2 = ((((CPU2 * Velocity2) * (UsoCPU2 / 100)) * 0.2) + ((CPU2 * Velocity2) * (UsoCPU2 / 100)))
        var calculoMemory2 = (((Memory2*(UsoMemory2 / 100)) * 0.2) + (Memory2*(UsoMemory2 / 100)))
        var calculoDisk2 = (((Disk2*(UsoDisk2 / 100)) * 0.2) + (Disk2*(UsoDisk2 / 100)))
     

        ////////////////////////???????? PC 1 ????????////////////////////////////////////
        var calculoCPU3 = ((((CPU3 * Velocity3) * (UsoCPU3 / 100)) * 0.2) + ((CPU3 * Velocity3) * (UsoCPU3 / 100)))
        var calculoMemory3 = (((Memory3*(UsoMemory3 / 100)) * 0.2) + (Memory3*(UsoMemory3 / 100)))
        var calculoDisk3 = (((Disk3*(UsoDisk3 / 100)) * 0.2) + (Disk3*(UsoDisk3 / 100)))


        ////////////////////////???????? PC 1 ?????????////////////////////////////////////
        var calculoCPU4 = ((((CPU4 * Velocity4) * (UsoCPU4 / 100)) * 0.2) + ((CPU4 * Velocity4) * (UsoCPU4 / 100)))
        var calculoMemory4 = (((Memory4*(UsoMemory4 / 100)) * 0.2) + (Memory4*(UsoMemory4 / 100)))
        var calculoDisk4 = (((Disk4*(UsoDisk4 / 100)) * 0.2) + (Disk4*(UsoDisk4 / 100)))
     

        ////////////////////////???????? PC 1 ?????????////////////////////////////////////
        var calculoCPU5 = ((((CPU5 * Velocity5) * (UsoCPU5 / 100)) * 0.2) + ((CPU5 * Velocity5) * (UsoCPU5 / 100)))
        var calculoMemory5 = (((Memory5*(UsoMemory5 / 100)) * 0.2) + (Memory5*(UsoMemory5 / 100)))
        var calculoDisk5 = (((Disk5*(UsoDisk5 / 100)) * 0.2) + (Disk5*(UsoDisk5 / 100)))



        var calculoCPUTot = ((calculoCPU + calculoCPU2 + calculoCPU3 + calculoCPU4 + calculoCPU5) * 0.25) + (calculoCPU + calculoCPU2 + calculoCPU3 + calculoCPU4 + calculoCPU5)

        var calculoMemoryTot = ((calculoMemory + calculoMemory2 + calculoMemory3 + calculoMemory4 + calculoMemory5) * 0.25) + (calculoMemory + calculoMemory2 + calculoMemory3 + calculoMemory4 + calculoMemory5)

        var calculoDiskTot = ((calculoDisk + calculoDisk2 + calculoDisk3 + calculoDisk4 + calculoDisk5) * 0.25) + (calculoDisk + calculoDisk2 + calculoDisk3 + calculoDisk4 + calculoDisk5)


        let item = document.createElement('option')
        item.setAttribute("id", "RVelocyfinal");
        item.text = `${calculoCPUTot.toFixed(2)}`
        RVelocy.appendChild(item)

        let item2 = document.createElement('option')
        item2.setAttribute("id", "RMemoryfinal");
        item2.text = `${calculoMemoryTot.toFixed(2)}`
        RMemory.appendChild(item2)

        let item3 = document.createElement('option')
        item3.setAttribute("id", "RDiskfinal");
        item3.text = `${calculoDiskTot.toFixed(2)}`
        RDisk.appendChild(item3)

        Verificador()

}


function habilitado1() {
   var CPU = document.getElementById('CPU').value=''
   var Velocity = document.getElementById('Velc').value=''
   var UsoCPU = document.getElementById('UsoCPU').value=''
   var Memory = document.getElementById('Memory').value=''
   var UsoMemory = document.getElementById('UsoMemory').value=''
   var Disk = document.getElementById('Disk').value=''
   var UsoDisk = document.getElementById('UsoDisk').value=''

   CalcularPc()

}

function habilitado2() {
   var CPU2 = document.getElementById('CPU2').value=''
   var Velocity2 = document.getElementById('Velc2').value=''
   var UsoCPU2 = document.getElementById('UsoCPU2').value=''
   var Memory2 = document.getElementById('Memory2').value=''
   var UsoMemory2 = document.getElementById('UsoMemory2').value=''
   var Disk2 = document.getElementById('Disk2').value=''
   var UsoDisk2 = document.getElementById('UsoDisk2').value=''


   CalcularPc()

}

function habilitado3() {
var CPU3 = document.getElementById('CPU3').value=''
var Velocity3 = document.getElementById('Velc3').value=''
var UsoCPU3 = document.getElementById('UsoCPU3').value=''
var Memory3 = document.getElementById('Memory3').value=''
var UsoMemory3 = document.getElementById('UsoMemory3').value=''
var Disk3 = document.getElementById('Disk3').value=''
var UsoDisk3 = document.getElementById('UsoDisk3').value=''

 
   CalcularPc()

}

function habilitado4() {
   var CPU4 = document.getElementById('CPU4').value=''
   var Velocity4 = document.getElementById('Velc4').value=''
   var UsoCPU4 = document.getElementById('UsoCPU4').value=''
   var Memory4 = document.getElementById('Memory4').value=''
   var UsoMemory4 = document.getElementById('UsoMemory4').value=''
   var Disk4 = document.getElementById('Disk4').value=''
   var UsoDisk4 = document.getElementById('UsoDisk4').value=''
 
   CalcularPc()

}

function habilitado5() {

   var CPU5 = document.getElementById('CPU5').value=''
   var Velocity5 = document.getElementById('Velc5').value=''
   var UsoCPU5 = document.getElementById('UsoCPU5').value=''
   var Memory5 = document.getElementById('Memory5').value=''
   var UsoMemory5 = document.getElementById('UsoMemory5').value=''
   var Disk5 = document.getElementById('Disk5').value=''
   var UsoDisk5 = document.getElementById('UsoDisk5').value=''

 
   CalcularPc()

}


function Verificador() {


   var Velocitytot = document.getElementById('RVelocyfinal').innerHTML
   var Memorytot = document.getElementById('RMemoryfinal').innerHTML
   var Disktot = document.getElementById('RDiskfinal').innerHTML

   var Velocitytot1 = Number(Velocitytot)
   var Memorytot1 = Number(Memorytot)
   var Disktot1 = Number(Disktot)




   var CPU2 = document.getElementById('cpuft').innerHTML
   var Velocity2 = document.getElementById('velof').innerHTML
   var Memory2 = document.getElementById('memof').innerHTML
   var Disk2 = document.getElementById('discf').innerHTML

   var CPUf = Number(CPU2)
   var Velocityf = Number(Velocity2)
   var Memorytotf = Number(Memory2)
   var Disktotf = Number(Disk2)

   let calculocpu = Number(CPUf * Velocityf);
   
   console.log(Disktot1)
   console.log(Disktotf)

   console.log(Memorytot1)
   console.log(Memorytotf)

   console.log(Velocitytot1)
   console.log(calculocpu)

   result.innerHTML = ''


   if(Disktotf>Disktot1 && Memorytotf>Memorytot1 && calculocpu>Velocitytot){
      let item = document.createElement('option')
      item.setAttribute("id", "RespVerificar");
      item.text = "Compatível"
      result.appendChild(item)
   } else {
      let item = document.createElement('option')
      item.setAttribute("id", "RespVerificar");
      item.text = "Incompativel"
      result.appendChild(item)
   }



}


