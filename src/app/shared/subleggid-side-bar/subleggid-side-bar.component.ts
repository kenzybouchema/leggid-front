import { Component, OnInit } from '@angular/core';
import {SubleggidModel} from "../../subleggid/subleggid-model";
import {SubleggidService} from "../../subleggid/subleggid.service";

@Component({
  selector: 'app-subleggid-side-bar',
  templateUrl: './subleggid-side-bar.component.html',
  styleUrls: ['./subleggid-side-bar.component.css']
})
export class SubleggidSideBarComponent implements OnInit {

  subleggids: Array<SubleggidModel> = [];

  constructor(private subleggidService: SubleggidService) { }

  ngOnInit(): void {
    this.subleggidService.getAllSubleggids().subscribe(data => this.subleggids = data);
  }

}
