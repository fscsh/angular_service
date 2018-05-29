import { Injectable , EventEmitter} from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable()

export class AccountsService {
    accounts = [
      {
        name: 'Master Account',
        status: 'active'
      },
      {
        name: 'Testaccount',
        status: 'inactive'
      },
      {
        name: 'Hidden Account',
        status: 'unknown'
      }
    ];

    constructor(private LoggingService: LoggingService){}
    statusUpdate = new EventEmitter<string>();

    newAccount(name: string, status: string) {
      this.accounts.push({name:name, status: status});
      this.LoggingService.logStatusChange(status);

    }
    
    updateState(id: number, newStatus: string) {
      this.accounts[id].status = status;
      this.LoggingService.logStatusChange(status);

    }
}
