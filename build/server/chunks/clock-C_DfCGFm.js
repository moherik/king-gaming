import { c as create_ssr_component, v as validate_component } from './ssr-D8vzeGmv.js';
import { I as Icon } from './Icon-6B7qrYG7.js';

const Clock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "10" }],
    ["polyline", { "points": "12 6 12 12 16 14" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "clock" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});

export { Clock as C };
//# sourceMappingURL=clock-C_DfCGFm.js.map
