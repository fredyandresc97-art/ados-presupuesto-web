/* @ds-bundle: {"format":3,"namespace":"ADOSDesignSystem_5aafbb","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Callout","sourcePath":"components/feedback/Callout.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"d257009929d4","components/core/Button.jsx":"39e52aa61f81","components/core/Card.jsx":"7907150f838f","components/core/IconButton.jsx":"70d054f0214c","components/core/Tag.jsx":"2735491d689e","components/feedback/Callout.jsx":"3a35a92c34a3","components/forms/Checkbox.jsx":"194d24d99dc9","components/forms/Input.jsx":"0e3374b442c3","components/forms/Select.jsx":"62f7e5b8eb02","components/forms/Switch.jsx":"26e0438a34e7","components/navigation/Tabs.jsx":"678715d6a8c5","ui_kits/website/App.jsx":"8ffc14f0da01","ui_kits/website/ContactScreen.jsx":"12096d94f651","ui_kits/website/Footer.jsx":"be4ec884aea7","ui_kits/website/Header.jsx":"d23796d48c6e","ui_kits/website/HomeScreen.jsx":"93f2d6e7c1fe","ui_kits/website/Pieces.jsx":"4164f7f89886","ui_kits/website/ProjectDetailScreen.jsx":"4e309739bcde","ui_kits/website/ProjectsScreen.jsx":"18960235ca15","ui_kits/website/ServicesScreen.jsx":"03f7b3260798","ui_kits/website/data.js":"c56d89bab1ed","ui_kits/website/tweaks-panel.jsx":"6591467622ed"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ADOSDesignSystem_5aafbb = window.ADOSDesignSystem_5aafbb || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ADOS Badge — small uppercase status marker. Sharper than Tag (6px radius).
 * status: neutral | active | success | warning | danger
 */
function Badge({
  children,
  status = 'neutral',
  dot = false,
  style = {},
  ...rest
}) {
  const map = {
    neutral: {
      color: 'var(--text-muted)',
      border: 'var(--border-strong)',
      dot: 'var(--text-muted)'
    },
    active: {
      color: 'var(--accent)',
      border: 'rgba(249,178,51,0.4)',
      dot: 'var(--accent)'
    },
    success: {
      color: '#5FC08C',
      border: 'rgba(63,163,114,0.4)',
      dot: '#3FA372'
    },
    warning: {
      color: 'var(--accent)',
      border: 'rgba(249,178,51,0.4)',
      dot: 'var(--accent)'
    },
    danger: {
      color: '#E8857E',
      border: 'rgba(215,84,75,0.4)',
      dot: '#D7544B'
    }
  };
  const c = map[status] || map.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: "ados-badge",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      height: 22,
      padding: '0 9px',
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      fontSize: 11,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      borderRadius: 'var(--radius-sm)',
      border: `1px solid ${c.border}`,
      color: c.color,
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: c.dot
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ADOS Button — geometric, dark-first, amber primary.
 * Variants: primary (amber/navy), secondary (outlined), ghost, light (for light surfaces).
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft = null,
  iconRight = null,
  fullWidth = false,
  disabled = false,
  href = null,
  onClick,
  type = 'button',
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      fontSize: 13,
      padding: '0 14px',
      height: 34,
      gap: 7
    },
    md: {
      fontSize: 14,
      padding: '0 20px',
      height: 44,
      gap: 9
    },
    lg: {
      fontSize: 16,
      padding: '0 28px',
      height: 52,
      gap: 10
    }
  };
  const s = sizes[size] || sizes.md;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    height: s.height,
    padding: s.padding,
    width: fullWidth ? '100%' : 'auto',
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    fontSize: s.fontSize,
    letterSpacing: '-0.01em',
    borderRadius: 'var(--radius-ui)',
    border: '1px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transition: 'background var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard), color var(--dur-fast), transform var(--dur-fast)',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    userSelect: 'none'
  };
  const variants = {
    primary: {
      background: 'var(--accent)',
      color: 'var(--on-accent)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--text)',
      borderColor: 'var(--border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text)'
    },
    light: {
      background: 'var(--ados-ink)',
      color: 'var(--ados-white)'
    }
  };
  const cls = `ados-btn ados-btn--${variant}`;
  const props = {
    className: cls,
    style: {
      ...base,
      ...(variants[variant] || variants.primary),
      ...style
    },
    onClick: disabled ? undefined : onClick,
    'aria-disabled': disabled || undefined,
    ...rest
  };
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, iconLeft && /*#__PURE__*/React.createElement("span", {
    className: "ados-btn__icon",
    style: {
      display: 'inline-flex'
    }
  }, iconLeft), children, iconRight && /*#__PURE__*/React.createElement("span", {
    className: "ados-btn__icon",
    style: {
      display: 'inline-flex'
    }
  }, iconRight));
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href
    }, props), inner);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled
  }, props), inner);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ADOS Card — surface container. 6px radius, 1px hairline border, NO soft shadow.
 * tone: dark (default, navy surface) | light (white surface).
 * Set `media` to a background-image URL for a full-bleed image header (0px radius).
 */
function Card({
  children,
  tone = 'dark',
  media = null,
  mediaHeight = 180,
  interactive = false,
  padding = 24,
  style = {},
  ...rest
}) {
  const tones = {
    dark: {
      background: 'var(--surface)',
      color: 'var(--text)',
      border: '1px solid var(--border)'
    },
    light: {
      background: 'var(--surface-light)',
      color: 'var(--text-on-light)',
      border: '1px solid var(--border-light)'
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `ados-card${interactive ? ' ados-card--interactive' : ''}`,
    style: {
      borderRadius: 'var(--radius-ui)',
      overflow: 'hidden',
      transition: 'border-color var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard)',
      ...(tones[tone] || tones.dark),
      ...style
    }
  }, rest), media && /*#__PURE__*/React.createElement("div", {
    style: {
      height: mediaHeight,
      backgroundImage: `url(${media})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ADOS IconButton — square, icon-only control. 44px hit target by default.
 */
function IconButton({
  children,
  label,
  variant = 'ghost',
  size = 'md',
  disabled = false,
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: 34,
    md: 44,
    lg: 52
  };
  const dim = sizes[size] || sizes.md;
  const variants = {
    ghost: {
      background: 'transparent',
      color: 'var(--text)',
      borderColor: 'transparent'
    },
    outline: {
      background: 'transparent',
      color: 'var(--text)',
      borderColor: 'var(--border-strong)'
    },
    solid: {
      background: 'var(--accent)',
      color: 'var(--on-accent)',
      borderColor: 'transparent'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: disabled ? undefined : onClick,
    className: `ados-iconbtn ados-iconbtn--${variant}`,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: dim,
      height: dim,
      borderRadius: 'var(--radius-ui)',
      border: '1px solid transparent',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'background var(--dur-fast) var(--ease-standard), border-color var(--dur-fast)',
      ...(variants[variant] || variants.ghost),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ADOS Tag — pill chip (the ONLY place 999px radius is used).
 * Use for disciplines, statuses, metadata. tone: default | amber | steel | outline.
 */
function Tag({
  children,
  tone = 'default',
  style = {},
  ...rest
}) {
  const tones = {
    default: {
      background: 'var(--ados-navy-700)',
      color: 'var(--text)',
      border: '1px solid transparent'
    },
    amber: {
      background: 'var(--accent)',
      color: 'var(--on-accent)',
      border: '1px solid transparent'
    },
    steel: {
      background: 'rgba(47,138,138,0.18)',
      color: '#7FD4D4',
      border: '1px solid rgba(47,138,138,0.4)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-muted)',
      border: '1px solid var(--border-strong)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `ados-tag ados-tag--${tone}`,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 26,
      padding: '0 12px',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: '0.01em',
      borderRadius: 'var(--radius-pill)',
      whiteSpace: 'nowrap',
      ...(tones[tone] || tones.default),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Callout.jsx
try { (() => {
/**
 * ADOS Callout — inline message block. Left amber keyline (functional, not decorative).
 * tone: info (amber) | steel | success | danger.
 */
function Callout({
  children,
  title,
  tone = 'info',
  icon = null,
  style = {}
}) {
  const tones = {
    info: {
      key: 'var(--accent)',
      tint: 'rgba(249,178,51,0.08)'
    },
    steel: {
      key: 'var(--ados-steel)',
      tint: 'rgba(47,138,138,0.10)'
    },
    success: {
      key: '#3FA372',
      tint: 'rgba(63,163,114,0.10)'
    },
    danger: {
      key: '#D7544B',
      tint: 'rgba(215,84,75,0.10)'
    }
  };
  const t = tones[tone] || tones.info;
  return /*#__PURE__*/React.createElement("div", {
    role: "note",
    style: {
      display: 'flex',
      gap: 14,
      padding: '16px 18px',
      background: t.tint,
      borderLeft: `2px solid ${t.key}`,
      borderRadius: 'var(--radius-ui)',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: t.key,
      flex: 'none',
      marginTop: 1
    }
  }, icon), /*#__PURE__*/React.createElement("div", null, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--text)',
      marginBottom: 4
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      lineHeight: 1.55,
      color: 'var(--text-muted)'
    }
  }, children)));
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Callout.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ADOS Checkbox — sharp 4px box, amber when checked (navy check).
 */
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  id,
  ...rest
}) {
  const cbId = id || (label ? `cb-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const [internal, setInternal] = React.useState(defaultChecked || false);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;
  const toggle = e => {
    if (disabled) return;
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: cbId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 11,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: cbId,
    type: "checkbox",
    className: "ados-checkbox",
    checked: on,
    onChange: toggle,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 20,
      height: 20,
      margin: 0,
      cursor: 'inherit'
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 20,
      height: 20,
      borderRadius: 'var(--radius-sm)',
      border: `1px solid ${on ? 'var(--accent)' : 'var(--border-strong)'}`,
      background: on ? 'var(--accent)' : 'transparent',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background var(--dur-fast), border-color var(--dur-fast)'
    }
  }, on && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2.5 6.2l2.3 2.3 4.7-5",
    stroke: "#222B35",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })))), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ADOS Input — text field. 6px radius, hairline border, amber focus ring.
 * Supports label, hint, error, and a leading icon.
 */
function Input({
  label,
  hint,
  error,
  icon = null,
  type = 'text',
  id,
  style = {},
  ...rest
}) {
  const inputId = id || (label ? `in-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: 'block',
      fontFamily: 'var(--font-body)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: '0.04em',
      color: 'var(--text-muted)',
      marginBottom: 8
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 13,
      top: '50%',
      transform: 'translateY(-50%)',
      display: 'inline-flex',
      color: 'var(--text-faint)',
      pointerEvents: 'none'
    }
  }, icon), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    className: "ados-input",
    style: {
      width: '100%',
      height: 44,
      padding: icon ? '0 14px 0 40px' : '0 14px',
      background: 'var(--ados-navy-950)',
      color: 'var(--text)',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      border: `1px solid ${error ? 'var(--danger)' : 'var(--border-strong)'}`,
      borderRadius: 'var(--radius-ui)',
      transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)',
      ...style
    }
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 12,
      marginTop: 7,
      color: error ? 'var(--danger)' : 'var(--text-faint)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ADOS Select — native select styled to match Input. Amber caret.
 */
function Select({
  label,
  hint,
  options = [],
  id,
  style = {},
  ...rest
}) {
  const selId = id || (label ? `sel-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const caret = encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="#F9B233" stroke-width="2"><path d="M4 6l4 4 4-4"/></svg>');
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: selId,
    style: {
      display: 'block',
      fontFamily: 'var(--font-body)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: '0.04em',
      color: 'var(--text-muted)',
      marginBottom: 8
    }
  }, label), /*#__PURE__*/React.createElement("select", _extends({
    id: selId,
    className: "ados-select",
    style: {
      width: '100%',
      height: 44,
      padding: '0 38px 0 14px',
      background: `var(--ados-navy-950) url("data:image/svg+xml,${caret}") no-repeat right 14px center`,
      color: 'var(--text)',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      border: '1px solid var(--border-strong)',
      borderRadius: 'var(--radius-ui)',
      appearance: 'none',
      WebkitAppearance: 'none',
      cursor: 'pointer',
      transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)',
      ...style
    }
  }, rest), options.map(o => {
    const value = typeof o === 'string' ? o : o.value;
    const labelText = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, labelText);
  })), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 12,
      marginTop: 7,
      color: 'var(--text-faint)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ADOS Switch — toggle. Amber track when on. 44px-friendly tap area.
 */
function Switch({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  id,
  ...rest
}) {
  const swId = id || (label ? `sw-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const [internal, setInternal] = React.useState(defaultChecked || false);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;
  const toggle = () => {
    if (disabled) return;
    const next = !on;
    if (!isControlled) setInternal(next);
    onChange && onChange(next);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: swId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text)'
    }
  }, /*#__PURE__*/React.createElement("button", _extends({
    id: swId,
    type: "button",
    role: "switch",
    "aria-checked": on,
    "aria-label": label,
    className: "ados-switch",
    disabled: disabled,
    onClick: toggle,
    style: {
      width: 44,
      height: 26,
      flex: 'none',
      padding: 3,
      borderRadius: 'var(--radius-pill)',
      border: '1px solid ' + (on ? 'var(--accent)' : 'var(--border-strong)'),
      background: on ? 'var(--accent)' : 'var(--ados-navy-950)',
      display: 'inline-flex',
      alignItems: 'center',
      cursor: 'inherit',
      transition: 'background var(--dur-base) var(--ease-standard), border-color var(--dur-base)'
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: on ? 'var(--on-accent)' : 'var(--text-muted)',
      transform: on ? 'translateX(18px)' : 'translateX(0)',
      transition: 'transform var(--dur-base) var(--ease-out), background var(--dur-base)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/**
 * ADOS Tabs — underline tabs with amber active indicator.
 * items: [{ id, label }]. Controlled via value/onChange or uncontrolled.
 */
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  style = {}
}) {
  const [internal, setInternal] = React.useState(defaultValue || items[0] && items[0].id);
  const active = value !== undefined ? value : internal;
  const select = id => {
    if (value === undefined) setInternal(id);
    onChange && onChange(id);
  };
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: 4,
      borderBottom: '1px solid var(--border)',
      ...style
    }
  }, items.map(it => {
    const on = it.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      role: "tab",
      "aria-selected": on,
      className: "ados-tab",
      onClick: () => select(it.id),
      style: {
        position: 'relative',
        background: 'transparent',
        border: 'none',
        padding: '12px 16px',
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 14,
        letterSpacing: '-0.01em',
        color: on ? 'var(--text)' : 'var(--text-muted)',
        cursor: 'pointer',
        transition: 'color var(--dur-fast)'
      }
    }, it.label, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 12,
        right: 12,
        bottom: -1,
        height: 2,
        background: 'var(--accent)',
        transform: on ? 'scaleX(1)' : 'scaleX(0)',
        transformOrigin: 'left',
        transition: 'transform var(--dur-base) var(--ease-out)'
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/App.jsx
try { (() => {
// ADOS website — Single-page scroll layout + Tweaks
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroLayout": "Imagen completa",
  "heroImage": "../../assets/img/reactor-aerial.png",
  "heroTitle": "Diseñamos lo que otros solo imaginan",
  "heroOverlay": 58,
  "scrollReveal": true,
  "accent": "#F9B233"
} /*EDITMODE-END*/;

// accent → derived hover/press (keeps the brand's amber discipline; teal is a rare alt)
const ACCENTS = {
  '#F9B233': {
    hover: '#FBC766',
    press: '#E7A11E'
  },
  '#E7A11E': {
    hover: '#F9B233',
    press: '#CE8E14'
  },
  '#2F8A8A': {
    hover: '#46A6A6',
    press: '#256E6E'
  }
};
const HERO_IMAGES = [{
  value: '../../assets/img/structural-frame.png',
  label: 'Estructura metálica'
}, {
  value: '../../assets/img/water-plant-wide.png',
  label: 'PTAR (planta)'
}, {
  value: '../../assets/img/reactor-aerial.png',
  label: 'Reactor (aéreo)'
}, {
  value: '../../assets/img/building-section.jpg',
  label: 'Corte de edificio'
}, {
  value: '../../assets/img/mep-isometric.jpg',
  label: 'Isométrico MEP'
}];
const SECTION_IDS = ['inicio', 'servicios', 'proyectos', 'contacto'];
const HEADER_OFFSET = 78;
function App() {
  const {
    Header,
    Footer,
    HeroSection,
    ProcessSection,
    CTASection,
    ServicesSection,
    ProjectsSection,
    ContactSection,
    ProjectDetailScreen,
    useTweaks,
    TweaksPanel,
    TweakSection,
    TweakRadio,
    TweakSelect,
    TweakSlider,
    TweakToggle,
    TweakText,
    TweakColor
  } = window;
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [route, setRoute] = React.useState('home'); // 'home' (one-page) | 'detail' (separate page)
  const [project, setProject] = React.useState(null);
  const [active, setActive] = React.useState('inicio');
  const pendingScroll = React.useRef(null);
  const doScroll = id => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = id === 'inicio' ? 0 : el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
    window.scrollTo({
      top: Math.max(0, top),
      behavior: 'smooth'
    });
  };

  // Nav / CTA → scroll to a section (returning from a detail page first if needed).
  const goToSection = id => {
    if (!SECTION_IDS.includes(id)) {
      // footer may pass non-section ids → just go home top
      if (route !== 'home') {
        setRoute('home');
        window.scrollTo({
          top: 0
        });
      }
      return;
    }
    if (route !== 'home') {
      pendingScroll.current = id;
      setRoute('home');
      return;
    }
    doScroll(id);
  };
  const openProject = p => {
    setProject(p);
    setRoute('detail');
    window.scrollTo({
      top: 0
    });
  };

  // After returning to the one-page from a detail page, run any pending scroll.
  React.useEffect(() => {
    if (route === 'home' && pendingScroll.current) {
      const id = pendingScroll.current;
      pendingScroll.current = null;
      requestAnimationFrame(() => requestAnimationFrame(() => doScroll(id)));
    }
  }, [route]);

  // Scroll-spy — highlight the active nav pill as each section passes.
  React.useEffect(() => {
    if (route !== 'home') return;
    let raf = null;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = null;
        const line = window.scrollY + window.innerHeight * 0.38;
        let cur = 'inicio';
        for (const id of SECTION_IDS) {
          const el = document.getElementById(id);
          if (el && el.getBoundingClientRect().top + window.scrollY <= line) cur = id;
        }
        // snap to last section at the very bottom of the page
        if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) cur = 'contacto';
        setActive(cur);
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [route]);
  const acc = ACCENTS[t.accent] || ACCENTS['#F9B233'];
  const accentVars = {
    '--accent': t.accent,
    '--accent-hover': acc.hover,
    '--accent-press': acc.press,
    '--focus-on-dark': t.accent
  };
  return /*#__PURE__*/React.createElement("div", {
    style: accentVars
  }, /*#__PURE__*/React.createElement(Header, {
    active: route === 'detail' ? 'proyectos' : active,
    onNavigate: goToSection
  }), route === 'detail' ? /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 96
    }
  }, /*#__PURE__*/React.createElement(ProjectDetailScreen, {
    project: project,
    onNavigate: (r, p) => {
      if (r === 'detail' && p) {
        openProject(p);
      } else {
        goToSection(r === 'projects' ? 'proyectos' : r === 'contact' ? 'contacto' : r);
      }
    }
  })) : /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("div", {
    id: "inicio"
  }, /*#__PURE__*/React.createElement(HeroSection, {
    t: t,
    onNavigate: goToSection
  })), /*#__PURE__*/React.createElement(ProcessSection, {
    t: t
  }), /*#__PURE__*/React.createElement("div", {
    id: "servicios"
  }, /*#__PURE__*/React.createElement(ServicesSection, {
    onNavigate: goToSection
  })), /*#__PURE__*/React.createElement("div", {
    id: "proyectos"
  }, /*#__PURE__*/React.createElement(ProjectsSection, {
    onNavigate: goToSection,
    onOpenProject: openProject
  })), /*#__PURE__*/React.createElement(CTASection, {
    onNavigate: goToSection
  }), /*#__PURE__*/React.createElement("div", {
    id: "contacto"
  }, /*#__PURE__*/React.createElement(ContactSection, {
    onNavigate: goToSection
  }))), /*#__PURE__*/React.createElement(Footer, {
    onNavigate: goToSection
  }), /*#__PURE__*/React.createElement(TweaksPanel, {
    title: "Tweaks"
  }, /*#__PURE__*/React.createElement(TweakSection, {
    label: "Portada principal"
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Disposici\xF3n",
    value: t.heroLayout,
    options: ['Imagen completa', 'Dividida'],
    onChange: v => setTweak('heroLayout', v)
  }), /*#__PURE__*/React.createElement(TweakSelect, {
    label: "Imagen",
    value: t.heroImage,
    options: HERO_IMAGES,
    onChange: v => setTweak('heroImage', v)
  }), /*#__PURE__*/React.createElement(TweakSlider, {
    label: "Oscurecer",
    value: t.heroOverlay,
    min: 20,
    max: 90,
    unit: "%",
    onChange: v => setTweak('heroOverlay', v)
  }), /*#__PURE__*/React.createElement(TweakText, {
    label: "Titular",
    value: t.heroTitle,
    placeholder: "Titular de la portada",
    onChange: v => setTweak('heroTitle', v)
  }), /*#__PURE__*/React.createElement(TweakSection, {
    label: "Movimiento"
  }), /*#__PURE__*/React.createElement(TweakToggle, {
    label: "Aparecer al hacer scroll",
    value: t.scrollReveal,
    onChange: v => setTweak('scrollReveal', v)
  }), /*#__PURE__*/React.createElement(TweakSection, {
    label: "Marca"
  }), /*#__PURE__*/React.createElement(TweakColor, {
    label: "Acento",
    value: t.accent,
    options: ['#F9B233', '#E7A11E', '#2F8A8A'],
    onChange: v => setTweak('accent', v)
  })));
}

// Exported to window; index.html performs the single mount after all babel
// scripts have loaded (App.jsx is also pulled into _ds_bundle.js, so it must
// NOT render on its own or it would double-mount).
window.App = App;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactScreen.jsx
try { (() => {
// ADOS website — Contact / consultoría
const {
  Button,
  Input,
  Select,
  Checkbox,
  Callout,
  Tag
} = window.ADOSDesignSystem_5aafbb;
function ContactSection({
  onNavigate
}) {
  const [sent, setSent] = React.useState(false);
  const wrap = {
    maxWidth: 'var(--container-max)',
    margin: '0 auto',
    padding: '0 32px'
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      padding: '72px 32px 96px',
      display: 'grid',
      gridTemplateColumns: '1fr 1.05fr',
      gap: 64
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 18
    }
  }, "Solicitar consultor\xEDa"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 48,
      letterSpacing: '-0.03em',
      margin: '0 0 20px'
    }
  }, "Hablemos de su modelo"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 17,
      lineHeight: 1.65,
      maxWidth: 420,
      margin: '0 0 36px'
    }
  }, "Cu\xE9ntenos qu\xE9 quiere construir. Le respondemos con un alcance BIM concreto: disciplinas, nivel de detalle y entregables."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      maxWidth: 380
    }
  }, [['Correo', 'contacto@ados.co'], ['Ubicación', 'Colombia'], ['Sector', 'Público y privado']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      paddingBottom: 16,
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.7rem',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      color: 'var(--text-faint)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 15
    }
  }, v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "default"
  }, "Revit"), /*#__PURE__*/React.createElement(Tag, {
    tone: "default"
  }, "Civil 3D"), /*#__PURE__*/React.createElement(Tag, {
    tone: "default"
  }, "Enscape"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-ui)',
      padding: 32
    }
  }, sent ? /*#__PURE__*/React.createElement(Callout, {
    tone: "success",
    title: "Solicitud enviada"
  }, "Gracias. Revisamos su proyecto y le escribimos a la brevedad con un alcance preliminar.") : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Nombre",
    placeholder: "Su nombre",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Organizaci\xF3n",
    placeholder: "Empresa / entidad"
  })), /*#__PURE__*/React.createElement(Input, {
    label: "Correo",
    type: "email",
    placeholder: "correo@dominio.co",
    required: true
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Disciplina principal",
    options: ['Estructural', 'Hidrosanitario', 'Arquitectura', 'MEP coordinado', 'Varias disciplinas']
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Cu\xE9ntenos del proyecto",
    placeholder: "Tipo de obra, ubicaci\xF3n, plazos\u2026"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "Necesito renders fotorrealistas (Enscape)",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Requiero detecci\xF3n de interferencias"
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    type: "submit",
    fullWidth: true
  }, "Enviar solicitud")))));
}
window.ContactSection = ContactSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
// ADOS website — Footer
function Footer({
  onNavigate
}) {
  const cols = [{
    h: 'Servicios',
    items: ['Consultoría BIM', 'Ingeniería estructural', 'Hidrosanitario', 'Arquitectura']
  }, {
    h: 'Compañía',
    items: ['Proyectos', 'Proceso', 'Sector público', 'Sector privado']
  }, {
    h: 'Contacto',
    items: ['contacto@ados.co', 'Colombia', 'Instagram']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--bg-deep)',
      borderTop: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '64px 32px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/ados-logo-light.svg",
    alt: "ADOS",
    style: {
      height: 40,
      marginBottom: 18
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 14,
      maxWidth: 260,
      lineHeight: 1.6,
      margin: 0
    }
  }, "Consultor\xEDa BIM, ingenier\xEDa y arquitectura. Modelamos cada disciplina antes de construir.")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.7rem',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      color: 'var(--text-faint)',
      marginBottom: 16
    }
  }, c.h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 11
    }
  }, c.items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: 'var(--text-muted)',
      fontSize: 14
    }
  }, it))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      paddingTop: 24,
      borderTop: '1px solid var(--border)',
      display: 'flex',
      justifyContent: 'space-between',
      color: 'var(--text-faint)',
      fontSize: 12.5
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 ADOS Ingenier\xEDa y Arquitectura SAS"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      letterSpacing: '0.04em'
    }
  }, "BIM desde el primer d\xEDa"))));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
// ADOS website — Header / floating pill navigation (scroll-spy)
function Header({
  active,
  onNavigate
}) {
  const links = [{
    id: 'inicio',
    label: 'Inicio'
  }, {
    id: 'servicios',
    label: 'Servicios'
  }, {
    id: 'proyectos',
    label: 'Proyectos'
  }, {
    id: 'contacto',
    label: 'Contacto'
  }];
  // Translucent backdrop appears once the page starts scrolling.
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      background: scrolled ? 'rgba(26,33,41,0.72)' : 'transparent',
      backdropFilter: scrolled ? 'blur(14px) saturate(140%)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(14px) saturate(140%)' : 'none',
      borderBottom: `1px solid ${scrolled ? 'var(--border)' : 'transparent'}`,
      transition: 'background var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard), backdrop-filter var(--dur-base)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-wide)',
      margin: '0 auto',
      padding: scrolled ? '12px 32px' : '20px 32px',
      display: 'grid',
      gridTemplateColumns: '1fr auto 1fr',
      alignItems: 'center',
      gap: 16,
      transition: 'padding var(--dur-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#inicio",
    onClick: e => {
      e.preventDefault();
      onNavigate('inicio');
    },
    style: {
      display: 'inline-flex',
      justifySelf: 'start'
    },
    "aria-label": "ADOS \u2014 inicio"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/ados-cube.svg",
    alt: "ADOS",
    style: {
      height: 44,
      filter: 'drop-shadow(0 2px 10px rgba(10,14,18,0.35))'
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      justifySelf: 'center',
      display: 'flex',
      alignItems: 'center',
      gap: 2,
      background: 'var(--ados-white)',
      borderRadius: 'var(--radius-pill)',
      padding: 6,
      border: '1px solid rgba(34,43,53,0.06)',
      boxShadow: '0 8px 28px rgba(10,14,18,0.22)'
    }
  }, links.map(l => {
    const isActive = active === l.id;
    return /*#__PURE__*/React.createElement("a", {
      key: l.id,
      href: `#${l.id}`,
      onClick: e => {
        e.preventDefault();
        onNavigate(l.id);
      },
      className: "ados-navpill",
      "aria-current": isActive ? 'true' : undefined,
      style: {
        padding: '9px 20px',
        borderRadius: 'var(--radius-pill)',
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 14,
        letterSpacing: '-0.01em',
        color: isActive ? 'var(--ados-white)' : 'var(--ados-ink)',
        background: isActive ? 'var(--ados-navy-900)' : 'transparent',
        transition: 'background var(--dur-fast), color var(--dur-fast)'
      }
    }, l.label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      justifySelf: 'end'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => onNavigate('contacto'),
    className: "ados-cta-pill",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      height: 48,
      padding: '0 24px',
      border: 'none',
      cursor: 'pointer',
      background: 'var(--accent)',
      color: 'var(--on-accent)',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 14,
      letterSpacing: '-0.01em',
      borderRadius: 'var(--radius-pill)',
      boxShadow: '0 8px 28px rgba(10,14,18,0.22)',
      transition: 'background var(--dur-fast)'
    }
  }, "Consultar consultor\xEDa"))));
}
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
// ADOS website — Home page sections (Inicio): Hero · Proceso · CTA
const {
  Button,
  Tag
} = window.ADOSDesignSystem_5aafbb;
const prefersReduced = () => typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Fade + slide-up as the element enters the viewport (movimiento al hacer scroll).
function Reveal({
  children,
  delay = 0,
  off = false,
  style = {}
}) {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(off);
  React.useEffect(() => {
    if (off) {
      setShown(true);
      return;
    }
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -8% 0px'
    });
    io.observe(el);
    return () => io.disconnect();
  }, [off]);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      opacity: shown ? 1 : 0,
      transform: shown ? 'none' : 'translateY(28px)',
      transition: `opacity 640ms var(--ease-out) ${delay}ms, transform 640ms var(--ease-out) ${delay}ms`,
      ...style
    }
  }, children);
}
const heroWrap = {
  maxWidth: 'var(--container-max)',
  margin: '0 auto',
  padding: '0 32px'
};

// ===== HERO (Inicio) — full-bleed image, overlay, headline, CTAs, amber tags =====
function HeroSection({
  t = {},
  onNavigate
}) {
  const heroFull = (t.heroLayout || 'Imagen completa') === 'Imagen completa';
  const heroImg = t.heroImage || '../../assets/img/reactor-aerial.png';
  const heroTitle = t.heroTitle || 'Diseñamos lo que otros solo imaginan';
  const ov = (t.heroOverlay == null ? 58 : t.heroOverlay) / 100;
  const HERO_META = {
    '../../assets/img/structural-frame.png': ['Estructural', 'LOD 350'],
    '../../assets/img/water-plant-wide.png': ['PTAR · Obra civil', 'LOD 350'],
    '../../assets/img/reactor-aerial.png': ['PTAR · Obra civil', 'LOD 350'],
    '../../assets/img/building-section.jpg': ['Arquitectura', 'LOD 300'],
    '../../assets/img/mep-isometric.jpg': ['MEP · Hidrosanitario', 'LOD 350']
  };
  const [tagA, tagB] = HERO_META[heroImg] || ['Estructural', 'LOD 350'];
  const HeroContent = ({
    onImage
  }) => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 22
    }
  }, "Consultor\xEDa BIM \xB7 Ingenier\xEDa \xB7 Arquitectura"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(40px, 5.2vw, 68px)',
      lineHeight: 1.02,
      letterSpacing: '-0.03em',
      margin: '0 0 24px',
      maxWidth: 620,
      textShadow: onImage ? '0 2px 30px rgba(10,14,18,0.5)' : 'none'
    }
  }, heroTitle), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.6,
      color: onImage ? 'rgba(255,255,255,0.82)' : 'var(--text-muted)',
      maxWidth: 470,
      margin: '0 0 32px'
    }
  }, "Modelamos cada disciplina antes de construir. Ingenier\xEDa estructural, hidrosanitaria y arquitectura coordinadas para el sector p\xFAblico y privado en Colombia."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onNavigate('proyectos'),
    iconRight: /*#__PURE__*/React.createElement("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 16 16",
      fill: "none"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M3 8h9M8.5 4l4 4-4 4",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))
  }, "Ver proyectos"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => onNavigate('servicios')
  }, "Conoce el proceso")));
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden'
    }
  }, heroFull ? /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      flex: 1,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: `url(${heroImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: `linear-gradient(90deg, rgba(26,33,41,${(0.34 + ov * 0.62).toFixed(3)}) 0%, rgba(26,33,41,${(ov * 0.6).toFixed(3)}) 52%, rgba(26,33,41,${(ov * 0.15).toFixed(3)}) 100%), linear-gradient(0deg, rgba(26,33,41,0.82) 0%, rgba(26,33,41,0) 52%)`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...heroWrap,
      position: 'relative',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '128px 32px 96px'
    }
  }, /*#__PURE__*/React.createElement(HeroContent, {
    onImage: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 32,
      bottom: 24,
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "amber"
  }, tagA), /*#__PURE__*/React.createElement(Tag, {
    tone: "steel"
  }, tagB))))) : /*#__PURE__*/React.createElement("div", {
    style: {
      ...heroWrap,
      display: 'grid',
      gridTemplateColumns: '1.05fr 0.95fr',
      gap: 48,
      alignItems: 'center',
      padding: '120px 32px 96px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(HeroContent, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--border-strong)',
      borderRadius: 0,
      overflow: 'hidden',
      background: 'var(--surface)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: heroImg,
    alt: "Modelo BIM",
    style: {
      width: '100%',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 16,
      bottom: 16,
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "amber"
  }, tagA), /*#__PURE__*/React.createElement(Tag, {
    tone: "steel"
  }, tagB)))));
}

// ===== PROCESO — part of the Inicio region =====
function ProcessSection({
  t = {}
}) {
  const {
    SectionLabel
  } = window;
  const revealOff = t.scrollReveal === false || prefersReduced();
  const steps = [{
    n: '01',
    t: 'Modelamos',
    d: 'Cada disciplina se levanta en BIM antes de tocar la obra.'
  }, {
    n: '02',
    t: 'Coordinamos',
    d: 'Detección de interferencias sobre el modelo federado.'
  }, {
    n: '03',
    t: 'Documentamos',
    d: 'Planos, cantidades y archivos IFC trazables y verificables.'
  }, {
    n: '04',
    t: 'Entregamos',
    d: 'Renders Enscape y un modelo listo para construcción.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--bg-deep)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...heroWrap,
      padding: '80px 32px'
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    off: revealOff
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    n: "03"
  }, "Proceso"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 34,
      letterSpacing: '-0.03em',
      margin: '0 0 44px',
      maxWidth: 520
    }
  }, "BIM desde el primer d\xEDa")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 28
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: s.n,
    off: revealOff,
    delay: i * 90
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 40,
      color: 'var(--accent)',
      letterSpacing: '-0.03em',
      lineHeight: 1
    }
  }, s.n), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--border-strong)',
      margin: '16px 0'
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 19,
      margin: '0 0 8px'
    }
  }, s.t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      color: 'var(--text-muted)',
      lineHeight: 1.55
    }
  }, s.d))))));
}

// ===== CTA BAND — transitions into Contacto =====
function CTASection({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      ...heroWrap,
      padding: '88px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--accent)',
      borderRadius: 'var(--radius-ui)',
      padding: '56px 56px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 32,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      color: 'var(--on-accent)',
      fontSize: 36,
      letterSpacing: '-0.03em',
      margin: '0 0 10px',
      maxWidth: 520
    }
  }, "\xBFTiene un proyecto en mente?"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(34,43,53,0.78)',
      fontSize: 17,
      margin: 0,
      maxWidth: 460
    }
  }, "Le mostramos el modelo antes de la primera l\xEDnea de obra.")), /*#__PURE__*/React.createElement(Button, {
    variant: "light",
    size: "lg",
    onClick: () => onNavigate('contacto')
  }, "Solicitar consultor\xEDa")));
}
window.HeroSection = HeroSection;
window.ProcessSection = ProcessSection;
window.CTASection = CTASection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Pieces.jsx
try { (() => {
// ADOS website — shared pieces
const {
  Card,
  Tag,
  Badge
} = window.ADOSDesignSystem_5aafbb;
function ProjectCard({
  p,
  onOpen
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: () => onOpen && onOpen(p),
    style: {
      cursor: onOpen ? 'pointer' : 'default'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    media: p.img,
    mediaHeight: 196,
    interactive: !!onOpen,
    padding: 20
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "amber"
  }, p.discipline), /*#__PURE__*/React.createElement(Tag, {
    tone: "outline"
  }, p.lod)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 19,
      lineHeight: 1.15,
      margin: '0 0 8px'
    }
  }, p.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-muted)',
      fontSize: 13.5,
      lineHeight: 1.55
    }
  }, p.summary), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      paddingTop: 14,
      borderTop: '1px solid var(--border)',
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 12,
      color: 'var(--text-faint)',
      letterSpacing: '0.04em'
    }
  }, /*#__PURE__*/React.createElement("span", null, p.location), /*#__PURE__*/React.createElement("span", null, p.year))));
}
function SectionLabel({
  children,
  n
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 18
    }
  }, n && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      color: 'var(--accent)',
      fontSize: 13
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.7rem',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      color: 'var(--text-muted)'
    }
  }, children), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: 'var(--border)'
    }
  }));
}
window.ProjectCard = ProjectCard;
window.SectionLabel = SectionLabel;

// Project detail modal — opens on card click. Larger image + extended description + specs.
function ProjectModal({
  project,
  onClose,
  onNavigate
}) {
  const {
    Tag,
    Badge,
    Button
  } = window.ADOSDesignSystem_5aafbb;
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    if (!project) return;
    const onKey = e => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const id = requestAnimationFrame(() => setShown(true));
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
      cancelAnimationFrame(id);
      setShown(false);
    };
  }, [project]);
  if (!project) return null;
  const p = project;
  const specs = [['Nivel de detalle', p.lod], ['Ubicación', p.location], ['Año', p.year], ['Software', (p.software || []).join(' · ')]];
  const close = e => {
    if (e.target === e.currentTarget) onClose();
  };
  return /*#__PURE__*/React.createElement("div", {
    onMouseDown: close,
    role: "dialog",
    "aria-modal": "true",
    "aria-label": p.title,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 90,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
      background: shown ? 'rgba(10,14,18,0.66)' : 'rgba(10,14,18,0)',
      backdropFilter: shown ? 'blur(6px)' : 'none',
      WebkitBackdropFilter: shown ? 'blur(6px)' : 'none',
      transition: reduce ? 'none' : 'background 240ms var(--ease-standard), backdrop-filter 240ms'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 'min(1040px, 100%)',
      maxHeight: '90vh',
      overflow: 'auto',
      background: 'var(--surface)',
      border: '1px solid var(--border-strong)',
      borderRadius: 'var(--radius-ui)',
      boxShadow: 'var(--shadow-overlay)',
      display: 'grid',
      gridTemplateColumns: '1.15fr 1fr',
      opacity: shown ? 1 : 0,
      transform: shown || reduce ? 'none' : 'translateY(16px) scale(0.985)',
      transition: reduce ? 'none' : 'opacity 260ms var(--ease-out), transform 260ms var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      minHeight: 420,
      background: 'var(--bg-deep)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: `url(${p.img})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 16,
      bottom: 16,
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "amber"
  }, p.discipline), /*#__PURE__*/React.createElement(Tag, {
    tone: "outline"
  }, p.lod))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '32px 34px',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 16,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    status: "success",
    dot: true
  }, "Entregado"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Cerrar",
    onClick: onClose,
    style: {
      width: 36,
      height: 36,
      flex: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'transparent',
      border: '1px solid var(--border-strong)',
      borderRadius: 'var(--radius-ui)',
      color: 'var(--text)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 4l8 8M12 4l-8 8",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round"
  })))), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 30,
      letterSpacing: '-0.03em',
      lineHeight: 1.08,
      margin: '0 0 14px'
    }
  }, p.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 24px',
      color: 'var(--text-muted)',
      fontSize: 15,
      lineHeight: 1.65
    }
  }, p.long || p.summary), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.7rem',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      color: 'var(--text-faint)',
      marginBottom: 10
    }
  }, "Disciplinas"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      marginBottom: 26
    }
  }, (p.disciplines || []).map(d => /*#__PURE__*/React.createElement(Tag, {
    key: d,
    tone: "steel"
  }, d))), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-ui)',
      overflow: 'hidden',
      marginBottom: 26
    }
  }, specs.map(([k, v], i) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 16,
      padding: '13px 16px',
      borderTop: i ? '1px solid var(--border)' : 'none',
      fontSize: 13.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-faint)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      textAlign: 'right'
    }
  }, v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => {
      onClose();
      onNavigate && onNavigate('contact');
    }
  }, "Solicitar proyecto similar"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: onClose
  }, "Cerrar")))));
}
window.ProjectModal = ProjectModal;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Pieces.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProjectDetailScreen.jsx
try { (() => {
// ADOS website — Project detail
const {
  Button,
  Tag,
  Badge,
  Tabs
} = window.ADOSDesignSystem_5aafbb;
function ProjectDetailScreen({
  project,
  onNavigate
}) {
  const {
    SectionLabel
  } = window;
  const p = project || window.ADOS_PROJECTS[0];
  const [tab, setTab] = React.useState('resumen');
  const wrap = {
    maxWidth: 'var(--container-max)',
    margin: '0 auto',
    padding: '0 32px'
  };
  const others = window.ADOS_PROJECTS.filter(x => x.id !== p.id).slice(0, 3);
  const specs = [['Disciplina', p.discipline], ['Nivel de detalle', p.lod], ['Ubicación', p.location], ['Año', p.year], ['Software', 'Revit · Enscape'], ['Entregable', 'IFC 4 · Planos']];
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: '28px 32px 0'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate('projects'),
    style: {
      background: 'none',
      border: 'none',
      color: 'var(--text-muted)',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      padding: 0
    }
  }, "\u2190 Volver a proyectos")), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      padding: '24px 32px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "amber"
  }, p.discipline), /*#__PURE__*/React.createElement(Tag, {
    tone: "outline"
  }, p.lod), /*#__PURE__*/React.createElement(Badge, {
    status: "success",
    dot: true
  }, "Entregado")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 46,
      letterSpacing: '-0.03em',
      margin: '0 0 18px',
      maxWidth: 760
    }
  }, p.title), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--border-strong)',
      overflow: 'hidden',
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: p.img,
    alt: p.title,
    style: {
      width: '100%',
      display: 'block'
    }
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      padding: '40px 32px 0',
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Tabs, {
    items: [{
      id: 'resumen',
      label: 'Resumen'
    }, {
      id: 'alcance',
      label: 'Alcance'
    }, {
      id: 'entregables',
      label: 'Entregables'
    }],
    value: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 24,
      color: 'var(--text-muted)',
      fontSize: 16,
      lineHeight: 1.7,
      maxWidth: 560
    }
  }, tab === 'resumen' && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, p.summary, " El modelo se desarroll\xF3 de forma federada, integrando todas las disciplinas en un \xFAnico entorno coordinado para anticipar interferencias antes de la construcci\xF3n."), tab === 'alcance' && /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      paddingLeft: 18,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("li", null, "Levantamiento y modelado ", p.lod, "."), /*#__PURE__*/React.createElement("li", null, "Coordinaci\xF3n entre disciplinas sobre modelo federado."), /*#__PURE__*/React.createElement("li", null, "Detecci\xF3n y resoluci\xF3n de interferencias."), /*#__PURE__*/React.createElement("li", null, "Renders fotorrealistas en Enscape.")), tab === 'entregables' && /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      paddingLeft: 18,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("li", null, "Archivos nativos Revit y exportaci\xF3n IFC 4."), /*#__PURE__*/React.createElement("li", null, "Planos t\xE9cnicos coordinados."), /*#__PURE__*/React.createElement("li", null, "Cantidades de obra extra\xEDdas del modelo."), /*#__PURE__*/React.createElement("li", null, "Visualizaciones para el cliente.")))), /*#__PURE__*/React.createElement("aside", null, /*#__PURE__*/React.createElement(SectionLabel, null, "Ficha t\xE9cnica"), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-ui)',
      overflow: 'hidden'
    }
  }, specs.map(([k, v], i) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '14px 18px',
      background: 'var(--surface)',
      borderTop: i ? '1px solid var(--border)' : 'none',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-faint)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500
    }
  }, v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    fullWidth: true,
    onClick: () => onNavigate('contact')
  }, "Solicitar un proyecto similar")))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      padding: '72px 32px 88px'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Otros proyectos"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24
    }
  }, others.map(o => /*#__PURE__*/React.createElement(window.ProjectCard, {
    key: o.id,
    p: o,
    onOpen: pr => {
      onNavigate('detail', pr);
    }
  })))));
}
window.ProjectDetailScreen = ProjectDetailScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProjectDetailScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProjectsScreen.jsx
try { (() => {
// ADOS website — Projects listing
const {
  Tabs,
  Button
} = window.ADOSDesignSystem_5aafbb;
function ProjectsSection({
  onOpenProject,
  onNavigate
}) {
  const {
    ProjectCard
  } = window;
  const all = window.ADOS_PROJECTS;
  const [filter, setFilter] = React.useState('all');
  const wrap = {
    maxWidth: 'var(--container-max)',
    margin: '0 auto',
    padding: '0 32px'
  };
  const tabs = [{
    id: 'all',
    label: 'Todos'
  }, {
    id: 'Hidrosanitario',
    label: 'Hidrosanitario'
  }, {
    id: 'Arquitectura',
    label: 'Arquitectura'
  }, {
    id: 'Estructural',
    label: 'Estructural'
  }];
  const shown = filter === 'all' ? all : all.filter(p => p.discipline === filter);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      borderBottom: '1px solid var(--border)',
      background: 'var(--bg-deep)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: '64px 32px 36px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 16
    }
  }, "Portafolio"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 48,
      letterSpacing: '-0.03em',
      margin: '0 0 16px'
    }
  }, "Proyectos coordinados en BIM"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 17,
      maxWidth: 540,
      margin: 0,
      lineHeight: 1.6
    }
  }, "Cada entrega nace de un modelo federado. Filtre por disciplina para ver el trabajo en detalle."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: tabs,
    value: filter,
    onChange: setFilter
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      padding: '48px 32px 88px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24
    }
  }, shown.map(p => /*#__PURE__*/React.createElement(ProjectCard, {
    key: p.id,
    p: p,
    onOpen: onOpenProject
  })))));
}
window.ProjectsSection = ProjectsSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProjectsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ServicesScreen.jsx
try { (() => {
// ADOS website — Services
const {
  Button,
  Callout
} = window.ADOSDesignSystem_5aafbb;
function ServiceCard({
  s,
  i
}) {
  const [hover, setHover] = React.useState(false);
  const num = String(i + 1).padStart(2, '0');
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-ui)',
      overflow: 'hidden',
      // card depth: gradient navy (top) → darker navy (bottom)
      background: 'linear-gradient(180deg, var(--surface) 0%, var(--bg-deep) 118%)',
      border: `1px solid ${hover ? 'var(--accent)' : 'var(--border)'}`,
      boxShadow: hover ? '0 0 0 1px var(--accent), 0 18px 48px rgba(249,178,51,0.10)' : '0 1px 0 rgba(255,255,255,0.02)',
      transform: hover ? 'translateY(-4px)' : 'translateY(0)',
      transition: 'transform var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard)',
      minHeight: 248,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 2,
      background: hover ? 'var(--accent)' : 'transparent',
      transition: 'background var(--dur-base) var(--ease-standard)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '26px 28px 30px',
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 58,
      lineHeight: 0.9,
      letterSpacing: '-0.04em',
      color: hover ? 'var(--accent)' : 'var(--text-faint)',
      transition: 'color var(--dur-base) var(--ease-standard)'
    }
  }, num), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/ados-cube.svg",
    alt: "",
    style: {
      width: 26,
      opacity: hover ? 1 : 0.5,
      transition: 'opacity var(--dur-base)'
    }
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 20,
      margin: '0 0 10px',
      letterSpacing: '-0.015em',
      lineHeight: 1.12
    }
  }, s.t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-muted)',
      fontSize: 14,
      lineHeight: 1.6
    }
  }, s.d)));
}
function ServicesSection({
  onNavigate
}) {
  const wrap = {
    maxWidth: 'var(--container-max)',
    margin: '0 auto',
    padding: '0 32px'
  };
  const services = [{
    t: 'Modelado BIM',
    d: 'Creación de modelos paramétricos LOD 200–400 en Revit para arquitectura, estructura e instalaciones.'
  }, {
    t: 'Coordinación BIM',
    d: 'Federación y detección de interferencias, gestión del Common Data Environment y flujo interdisciplinar.'
  }, {
    t: 'Implementación BIM para empresas',
    d: 'Estrategia, estándares, plantillas y capacitación para adoptar BIM en constructoras y estudios.'
  }, {
    t: 'Consultoría en ingeniería',
    d: 'Revisión técnica de proyectos estructurales, hidrosanitarios y de procesos con criterio de ingeniería.'
  }, {
    t: 'Diseño arquitectónico',
    d: 'Diseño, documentación y cortes sincronizados con el modelo federado.'
  }, {
    t: 'Automatización de procesos BIM',
    d: 'Dynamo, Python y scripts para eliminar tareas repetitivas y acelerar entregas.'
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      borderBottom: '1px solid var(--border)',
      background: 'var(--bg-deep)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: '64px 32px 56px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 16
    }
  }, "Servicios"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 48,
      letterSpacing: '-0.03em',
      margin: '0 0 16px',
      maxWidth: 720
    }
  }, "Un modelo, todas las disciplinas"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 17,
      maxWidth: 540,
      margin: 0,
      lineHeight: 1.6
    }
  }, "Integramos ingenier\xEDa, arquitectura y coordinaci\xF3n BIM en un solo flujo de trabajo."))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--bg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: '0 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      padding: '40px 0 36px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 64,
      height: 2,
      background: 'var(--accent)',
      transform: 'skewX(-24deg)',
      transformOrigin: 'left'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: 'linear-gradient(90deg, var(--border-strong), transparent)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.7rem',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      color: 'var(--text-faint)'
    }
  }, "Seis disciplinas, un flujo BIM")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 20
    }
  }, services.map((s, i) => /*#__PURE__*/React.createElement(ServiceCard, {
    key: s.t,
    s: s,
    i: i
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Callout, {
    tone: "info",
    title: "BIM desde el primer d\xEDa"
  }, "No entregamos planos sueltos: entregamos un modelo coordinado del que se derivan planos, cantidades y renders.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      paddingBottom: 88,
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onNavigate('contact')
  }, "Solicitar consultor\xEDa"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => onNavigate('projects')
  }, "Ver proyectos")))));
}
window.ServicesSection = ServicesSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ServicesScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
// ADOS website — shared sample data
window.ADOS_PROJECTS = [{
  id: 'ptar-uribe',
  title: 'PTAR Uribe',
  discipline: 'Hidrosanitario',
  location: 'Meta, Colombia',
  year: '2025',
  lod: 'LOD 350',
  img: '../../assets/img/water-plant-wide.png',
  summary: 'Modelado BIM de planta de tratamiento de aguas residuales con diseño de procesos y render fotorrealista en Enscape.',
  long: 'Modelo BIM integral de la planta de tratamiento de aguas residuales del municipio de Uribe. El alcance incluyó el diseño de procesos, el modelado de tanques, reactores y redes, y la generación de renders fotorrealistas en Enscape para socializar el proyecto con la comunidad y la entidad contratante.',
  software: ['Revit', 'Civil 3D', 'Enscape'],
  disciplines: ['Hidrosanitario', 'Diseño de procesos', 'Obra civil']
}, {
  id: 'ptar-cumaral',
  title: 'PTAR Cumaral',
  discipline: 'Hidrosanitario',
  location: 'Meta, Colombia',
  year: '2025',
  lod: 'LOD 350',
  img: '../../assets/img/reactor-aerial.png',
  summary: 'Diseño y coordinación BIM de PTAR municipal, incluyendo modelo federado con estructura y obra civil.',
  long: 'Diseño y coordinación BIM de la PTAR municipal de Cumaral. Se construyó un modelo federado que integró las disciplinas hidrosanitaria, estructural y de obra civil, permitiendo detectar interferencias y consolidar la documentación técnica antes de la construcción.',
  software: ['Revit', 'Navisworks', 'Civil 3D'],
  disciplines: ['Hidrosanitario', 'Estructural', 'Obra civil']
}, {
  id: 'ptar-mesetas',
  title: 'PTAR Mesetas',
  discipline: 'Hidrosanitario',
  location: 'Meta, Colombia',
  year: '2026',
  lod: 'LOD 350',
  img: '../../assets/img/water-plant-2.png',
  summary: 'Planta de tratamiento de aguas residuales con modelado BIM integral y documentación para construcción.',
  long: 'Planta de tratamiento de aguas residuales para el municipio de Mesetas, desarrollada con modelado BIM integral. La entrega incluyó documentación coordinada para construcción, cantidades extraídas del modelo y visualizaciones del conjunto en su contexto.',
  software: ['Revit', 'Enscape'],
  disciplines: ['Hidrosanitario', 'Diseño de procesos']
}, {
  id: 'colegio-vichada',
  title: 'Ampliación Colegio',
  discipline: 'Arquitectura',
  location: 'Vichada, Colombia',
  year: '2025',
  lod: 'LOD 300',
  img: '../../assets/img/building-section.jpg',
  summary: 'Diseño arquitectónico y modelado BIM de ampliación de institución educativa en zona rural, coordinado con estructura.',
  long: 'Diseño arquitectónico y modelado BIM de la ampliación de una institución educativa en zona rural del Vichada. El modelo arquitectónico se coordinó con la estructura para garantizar la constructibilidad en un contexto de acceso limitado, priorizando soluciones eficientes y replicables.',
  software: ['Revit', 'Enscape'],
  disciplines: ['Arquitectura', 'Estructural']
}, {
  id: 'ados-tower',
  title: 'Edificio Ados Tower',
  discipline: 'Estructural',
  location: 'Bogotá, Colombia',
  year: '2026',
  lod: 'LOD 350',
  img: '../../assets/img/structural-frame.png',
  summary: 'Modelo estructural en acero con conexiones empernadas, coordinado con arquitectura y MEP.',
  long: 'Modelo estructural en acero del Edificio Ados Tower, con conexiones empernadas detalladas para fabricación y montaje. El modelo se coordinó con las disciplinas de arquitectura y MEP sobre un entorno federado, resolviendo interferencias y consolidando la documentación de taller.',
  software: ['Revit', 'Advance Steel', 'Navisworks'],
  disciplines: ['Estructural', 'Arquitectura', 'MEP']
}, {
  id: 'viviendas-serie',
  title: 'Viviendas en Serie',
  discipline: 'Arquitectura',
  location: 'Colombia',
  year: '2024–2026',
  lod: 'LOD 300',
  img: '../../assets/img/mep-isometric.jpg',
  summary: 'Diseño y modelado en Revit de múltiples viviendas unifamiliares y bifamiliares con documentación sincronizada.',
  long: 'Programa de diseño y modelado en Revit de múltiples viviendas unifamiliares y bifamiliares. Mediante plantillas y familias paramétricas se estandarizó la documentación, manteniendo planos, cortes y cantidades sincronizados con el modelo a lo largo de varias entregas entre 2024 y 2026.',
  software: ['Revit', 'Enscape'],
  disciplines: ['Arquitectura', 'Estructural']
}];
window.ADOS_DISCIPLINES = [{
  k: 'Estructural',
  d: 'Pórticos, conexiones y losas modeladas para fabricación y montaje.'
}, {
  k: 'Hidrosanitario',
  d: 'Redes de suministro, desagüe y plantas de tratamiento.'
}, {
  k: 'Arquitectura',
  d: 'Diseño, cortes y acabados sincronizados con el modelo federado.'
}, {
  k: 'MEP coordinado',
  d: 'Detección de interferencias entre disciplinas antes de obra.'
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

// ui_kits/website/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
