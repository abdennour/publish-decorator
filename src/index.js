const gate = (typeof window === 'object') ? window : global;

export function publish(target, key, descriptor) {
  if (descriptor && typeof descriptor.value === 'function') {
    gate[key] = descriptor.value;
  } else {
    gate[target.name] = target;
  }
};
