import { a as auth } from './chunks/auth_eDnd-px0.mjs';
import { d as defineMiddleware, s as sequence } from './chunks/index_Co7hB-Vn.mjs';
import './chunks/astro-designed-error-pages_N6nMxxNz.mjs';
import './chunks/astro/server_BV1oLWnF.mjs';
import 'clsx';

const onRequest$1 = defineMiddleware(async (context, next) => {
  const isAuthed = await auth.api.getSession({
    headers: context.request.headers
  });
  if (isAuthed) {
    context.locals.user = isAuthed.user;
    context.locals.session = isAuthed.session;
  } else {
    context.locals.user = null;
    context.locals.session = null;
  }
  return next();
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
