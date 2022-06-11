        //numeri
        var numeri = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
        var numeri1 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
        var numeri2 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

        //lettere
        var lettere = ["A", "B", "C", "D", "E", "F", "G"]
        var lettere2 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
        var lettere3 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
        var lettere4 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

        //random lettere
        var random1 = Math.floor(Math.random() * lettere.length)
        var random2 = Math.floor(Math.random() * lettere2.length)
        var random3 = Math.floor(Math.random() * lettere3.length)
        var random4 = Math.floor(Math.random() * lettere4.length)

        //random numeri
        var random6 = Math.floor(Math.random() * numeri1.length)
        var random7 = Math.floor(Math.random() * numeri2.length)
        var random5 = Math.floor(Math.random() * numeri.length)






        //write
        document.write('<h1 id="scritto">Targa random: ' + lettere[random1] + lettere2[random2] + numeri[random5] + numeri1[random6] + numeri2[random7] + lettere3[random3] + lettere4[random4] + '</h1>')
        
    
