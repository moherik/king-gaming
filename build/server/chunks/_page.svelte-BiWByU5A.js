import { c as create_ssr_component, s as subscribe, a as escape, b as add_attribute } from './ssr-D8vzeGmv.js';
import { p as page } from './stores-Cwz-jE6o.js';
import './SvelteToast.svelte_svelte_type_style_lang-B0BWDvec.js';
import './client-BUusD8wq.js';
import './index2-C-p3-SGJ.js';
import './exports-BGi7-Rnc.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let { data } = $$props;
  let email;
  let password;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$unsubscribe_page();
  return `<form class="space-y-6"><header class="space-y-1.5 text-center md:text-left" data-svelte-h="svelte-1eerfhe"><h4 class="text-2xl font-medium">Masuk</h4> <p class="text-sm">Masuk dengan akun yang telah Anda daftarkan.</p></header> <section class="space-y-4"><button type="button" class="${escape(data.theme.button, true) + " w-full space-x-2"}"><svg role="img" viewBox="0 0 24 24" width="18" height="18" fill="white" xmlns="http://www.w3.org/2000/svg"><title>Google</title><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"></path></svg> <span data-svelte-h="svelte-prikwh">Masuk dengan Google</span></button> <p class="text-center text-xs opacity-75" data-svelte-h="svelte-aiqy50">Atau masuk dengan Email</p> <div class="input-group w-full"><label for="email" class="input-label" data-svelte-h="svelte-rx7s2m">Email</label> <input name="email"${add_attribute("class", data.theme.input, 0)} type="email" placeholder="Masukkan Email Anda"${add_attribute("value", email, 0)}></div> <div><div class="input-group w-full"><label for="password" class="input-label" data-svelte-h="svelte-cnbmpl">Kata Sandi</label> <input name="password"${add_attribute("class", data.theme.input, 0)} type="password" placeholder="Masukkan Kata Sandi Anda"${add_attribute("value", password, 0)}></div> <div class="flex justify-end mt-2" data-svelte-h="svelte-qvd5q0"><a href="/auth/forgot-password" class="text-xs hover:underline">Lupa kata sandi?</a></div></div> <button type="submit" class="btn btn-red w-full" ${""}>Masuk</button> <p class="text-center text-xs opacity-75" data-svelte-h="svelte-u4kck5">Belum punya akun?</p> <a href="/auth/register"${add_attribute("class", data.theme.button, 0)}>Daftar Sekarang</a></section></form>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BiWByU5A.js.map
