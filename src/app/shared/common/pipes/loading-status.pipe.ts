import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

export function loadingStatus<T>(
  loadingCallback: (isLoading: boolean) => void
) {
  loadingCallback(true);

  return (source: Observable<T>) => {
    return source.pipe(finalize(() => loadingCallback(false)));
  };
}
