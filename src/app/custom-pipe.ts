import { DatePipe } from "@angular/common";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: "miaPipe"})
export class CustomPipe implements PipeTransform {

    transform(value: Date, ) {
        let  dataOggi = new Date();
        if (value < dataOggi ) {
            return value.getDate()+"-"+value.getMonth()+"-"+value.getFullYear()
        }else {
        return value.getHours()+":"+value.getMinutes()
        }
    }
}