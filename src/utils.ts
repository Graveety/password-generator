export default class Utils {


    str = "";
    constructor(str:string){
        this.str = str;
        //auto run
    }

    toLowerCase(){
        return this.str.toLowerCase()
    }

    toUpperCase(){
        return this.str
    }

      replace(){
        this.str = this.str.replace(/[\W\s_]/g, "");
      }

      split(){
        this.str = this.str.split("").join()
      }

      cleanStr(){
          this.replace();
          this.split();
      }


      reverse(){
          let reverseStr = "";

          let length
      }

      generatePassword(){
          let pwd = this.str + Date.now().toString()

          return pwd.split
      }
}//add a class that has a method to add, subtract, divide and multiple and have an extra function that generates an alphanumeric(numbers and alphabets) string and must have at least 5 random zeros
//min of 14 and max of 18 characters
//password generator app
