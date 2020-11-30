import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {TagsService} from "../tags.service";
import {ActivatedRoute} from "@angular/router";
import {Tag} from "../tag";
import {TagsFormComponent} from "../tags-form/tags-form.component";

@Component({
  selector: 'app-tags-edit',
  templateUrl: './tags-edit.component.html',
  styleUrls: ['./tags-edit.component.scss']
})
export class TagsEditComponent implements OnInit, AfterViewInit {

    @ViewChild('tagForm') tagForm: TagsFormComponent;

    public id: any = null;
    public model: Tag = null;

  constructor(
      public tagsService: TagsService,
      public route: ActivatedRoute
  ) { }

  ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');
      this.tagsService.editTag(this.id);
  }

  ngAfterViewInit() {
      this.tagForm.tagsForm.valueChanges.subscribe((data) => {
          this.tagsService.tagsFormValid.next(this.tagForm.tagsForm.valid);
      });
  }

}
