import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.scss']
})
export class VoterComponent implements OnInit {
  // 부모 => 자식
  @Input()
  name: string;

  // 자식 => 부모
  @Output()
  voted = new EventEmitter<boolean>();

  didVote = false;

  vote(agree: boolean) {
    this.didVote = true;
    // 자식 => 부모에게 voted 이벤트를 발생
    this.voted.emit(agree);
  }

  ngOnInit(): void {
  }
}
