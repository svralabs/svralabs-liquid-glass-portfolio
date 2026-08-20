import React from 'react';

export default function Textarea({ id, name, label, placeholder, required = false, rows = 4 }) {
  return (
    <div className="group">
      <label className="font-label-sm text-label-sm text-on-surface-variant uppercase block mb-3" htmlFor={id}>
        {label}
      </label>
      <textarea
        className="w-full bg-background border-b-2 border-surface-variant/30 text-on-surface px-0 py-4 focus:outline-none focus:border-ember focus:ring-0 transition-all placeholder:text-surface-variant/40"
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
        rows={rows}
      />
    </div>
  );
}
