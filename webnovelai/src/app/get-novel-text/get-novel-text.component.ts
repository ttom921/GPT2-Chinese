import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NovelService } from '../_service/novel/novel.service';

@Component({
  selector: 'get-novel-text',
  templateUrl: './get-novel-text.component.html',
  styleUrls: ['./get-novel-text.component.scss']
})
export class GetNovelTextComponent implements OnInit {
  //#region form相關
  formModel: FormGroup;
  formdata: any = {
    comment: "今年夏天",
    textlength: "30",
    nsamples: "1",
  };
  formErrors: any = {
    "comment": "",
    "textlength": "",
    "nsamples": "",
    "formError": "",
  };
  vaildationMessages: any = {
    "comment": {
      "required": "必須輸入",
      "minlength": "至少要3位",
      "maxlength": "最大64個字"
    },
  };
  resmsg: any = null;
  resmsglst: any = [];
  isLoading = false;
  //#endregion form相關
  constructor(
    private fb: FormBuilder,
    private novelService: NovelService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.BuildForm();
    // this.http.get<any>('/v0.1').subscribe(res => {
    //   console.log(res);
    // },
    //   error => {
    //     console.log(error);
    //   });
    // this.novelService.Get().subscribe(
    //   res => {

    //     console.log(res);
    //   }, error => {
    //     console.log(error);
    //   });
  }
  //#region form相關
  BuildForm() {
    this.formModel = this.fb.group({
      "comment": [
        this.formdata.comment,
        [
          Validators.required,
          //Validators.minLength(3),
          //Validators.maxLength(64),
        ]
      ],
      "textlength": [
        this.formdata.textlength,
        [
          //Validators.required,
          //Validators.minLength(3),
          //Validators.maxLength(64),
        ]
      ],
      "nsamples": [
        this.formdata.nsamples,
        [
          //Validators.required,
          //Validators.minLength(3),
          //Validators.maxLength(64),
        ]
      ]
    });
    this.formModel.valueChanges.subscribe(
      data => this.onValueChange(data)
    );
    this.onValueChange();
  }
  onValueChange(data?: any): void {
    if (!this.formModel) {
      return;
    }
    //檢查是否有錯誤和顯示錯誤訊息
    const form = this.formModel;
    for (const field in this.formErrors) {
      this.formErrors[field] = "";
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.vaildationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + " ";
        }
      }
    }
  }
  //#endregion form相關
  Send() {
    this.showLoadingScreen();
    this.formdata = this.formModel.value;
    console.log("Send =", this.formdata);
    let postdata = {
      "prefix": this.formdata.comment,
      "length": this.formdata.textlength,
      "nsamples": this.formdata.nsamples,
    };
    // let body = JSON.stringify(postdata);
    //console.log(postdata);
    this.novelService.Post(postdata).subscribe(
      res => {
        console.log(res);
        this.hideLoadingScreen();
        this.resmsglst = res;
      },
      error => {
        console.log(error);
        this.hideLoadingScreen();
      });
    // this.http.post<any>("/v0.1/genparaph", postdata).subscribe(
    //   res => {
    //     console.log(res);
    //   },
    //   error => {
    //     console.log(error);
    //   });

    // this.novelService.Post(postdata).subscribe(
    //   res => {
    //     console.log(res);
    //   },
    //   error => {
    //     console.log(error);
    //   });
    // this.http.post<any>("/v0.1/genparaph", { title: 'Angular POST Request Example' }).subscribe(
    //   res => {
    //     console.log(res);
    //   },
    //   error => {
    //     console.log(error);
    //   });

  }
  showLoadingScreen() {
    this.isLoading = true;
  }
  hideLoadingScreen() {
    this.isLoading = false;
  }
}
