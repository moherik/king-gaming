import { c as create_ssr_component, a as escape, b as add_attribute } from './ssr-D8vzeGmv.js';
import './SvelteToast.svelte_svelte_type_style_lang-B0BWDvec.js';
import './client-BUusD8wq.js';
import './index2-C-p3-SGJ.js';
import './exports-BGi7-Rnc.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  let { data } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0) $$bindings.form(form);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `<form method="post" class="space-y-6"><header class="space-y-1.5 text-center md:text-left" data-svelte-h="svelte-pnuiss"><h4 class="text-2xl font-medium">Daftar</h4> <p class="text-sm">Buat akun King Gaming Anda.</p></header> ${form?.errors.message ? `<div class="flex items-center justify-between text-sm text-red-600 py-2 px-3 bg-red-200 rounded-md"><span>${escape(form.errors.message)}</span></div>` : ``} <section class="space-y-4"><div class="input-group w-full"><label for="name" class="input-label" data-svelte-h="svelte-1terbjm">Nama Anda</label> <input name="name"${add_attribute("value", form?.values.name ?? "", 0)} class="${escape(data.theme.input, true) + " " + escape(form?.errors.name ? "input-error" : "", true)}" type="text" placeholder="Masukkan Nama Anda"> ${form?.errors.name ? `<p class="text-xs text-red-500">${escape(form.errors.name)}</p>` : ``}</div> <div class="input-group w-full"><label for="email" class="input-label" data-svelte-h="svelte-rx7s2m">Email</label> <input name="email"${add_attribute("value", form?.values.email ?? "", 0)} class="${escape(data.theme.input, true) + " " + escape(form?.errors.email ? "input-error" : "", true)}" type="email" placeholder="Masukkan Email Anda"> ${form?.errors.email ? `<p class="text-xs text-red-500">${escape(form.errors.email)}</p>` : ``}</div> <div class="grid md:grid-cols-2 gap-4"><div class="input-group w-full"><label for="password" class="input-label" data-svelte-h="svelte-cnbmpl">Kata Sandi</label> <input name="password"${add_attribute("value", form?.values.password ?? "", 0)} class="${escape(data.theme.input, true) + " " + escape(form?.errors.password ? "input-error" : "", true)}" type="password" placeholder="Masukkan kata sandi Anda"> ${form?.errors.password ? `<p class="text-xs text-red-500">${escape(form.errors.password)}</p>` : ``}</div> <div class="input-group w-full"><label for="confirm-password" class="input-label" data-svelte-h="svelte-9p3ux1">Konfirmasi Kata Sandi</label> <input name="confirm-password"${add_attribute("value", form?.values.confirmPassword ?? "", 0)} class="${escape(data.theme.input, true) + " " + escape(form?.errors.confirmPassword ? "input-error" : "", true)}" type="password" placeholder="Konfirmasi kata sandi"> ${form?.errors.confirmPassword ? `<p class="text-xs text-red-500">${escape(form.errors.confirmPassword)}</p>` : ``}</div></div> <div><label class="text-xs"><input type="checkbox" name="terms" ${form?.values.terms ? "checked" : ""} class="mr-1.5">
				Saya setuju dengan
				<a href="/terms-condition" target="_blank" class="text-red-500 hover:underline" data-svelte-h="svelte-1t9dokw">Syarat dan Ketentuan</a>
				dan
				<a href="/privacy-policy" target="_blank" class="text-red-500 hover:underline" data-svelte-h="svelte-1ggratw">Kebijakan Privasi</a></label> ${form?.errors.terms ? `<p class="text-xs text-red-500">${escape(form.errors.terms)}</p>` : ``}</div> <button class="btn btn-primary w-full" type="submit" ${""}>Daftar</button> <p class="text-center text-xs opacity-75" data-svelte-h="svelte-zox6qe">Atau</p> <button class="${escape(data.theme.button, true) + " w-full space-x-2"}" type="button"><svg role="img" viewBox="0 0 24 24" width="18" height="18" fill="white" xmlns="http://www.w3.org/2000/svg"><title>Google</title><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"></path></svg> <span data-svelte-h="svelte-c3qh6y">Daftar dengan Google</span></button> <p class="text-center text-xs opacity-75" data-svelte-h="svelte-g49m39">Sudah punya akun?</p> <a href="/auth/login"${add_attribute("class", data.theme.button, 0)}>Masuk</a></section></form>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-0EFT2DhC.js.map
