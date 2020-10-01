import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-search-cmp',
  templateUrl: './search-cmp.component.html',
  styleUrls: ['./search-cmp.component.scss']
})
export class SearchCmpComponent implements OnInit {
  type = [
    {id: 0, name: 'Sản phẩm'},
    {id: 1, name: 'Gian hàng'}
  ]

  selectedType = {id: 0, name: 'Sản phẩm'};

  searchForm: FormGroup;

  @Output() submitSearch = new EventEmitter();

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      typeTerm: [{}],
      searchTerm: ['']
    });
    this.searchForm.controls.typeTerm.setValue(this.selectedType)
  }

  get f() {
    return this.searchForm.controls;
  }

  onSubmit() {
    if (this.searchForm.invalid) {
      return;
    }

    this.submitSearch.emit({
      typeTerm: this.f.typeTerm.value,
      searchTerm: this.f.searchTerm.value
    })
  }
}
