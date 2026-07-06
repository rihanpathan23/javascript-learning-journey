function normalizeUnits(manifest){
  const updateManifest={...manifest};
  if(updateManifest.unit==="lb"){
    updateManifest.weight=updateManifest.weight * 0.45;
    updateManifest.unit="kg";
  }
  return updateManifest;
}
function validateManifest(manifest) {
  const errors = {};
  if (!manifest.hasOwnProperty('containerId')) {
    errors.containerId = "Missing";
  } else if (typeof manifest.containerId !== 'number' || manifest.containerId <= 0 || !Number.isInteger(manifest.containerId)) {
    errors.containerId = "Invalid";
  }
  if (!manifest.hasOwnProperty('destination')) {
    errors.destination = "Missing";
  } else if (typeof manifest.destination !== 'string' || manifest.destination.trim() === "") {
    errors.destination = "Invalid";
  }

  if (!manifest.hasOwnProperty('weight')) {
    errors.weight = "Missing";
  } else if (typeof manifest.weight !== 'number' || manifest.weight <= 0 || Number.isNaN(manifest.weight)) {
    errors.weight = "Invalid";
  }

  if (!manifest.hasOwnProperty('unit')) {
    errors.unit = "Missing";
  } else if (manifest.unit !== 'kg' && manifest.unit !== 'lb') {
    errors.unit = "Invalid";
  }
  if (!manifest.hasOwnProperty('hazmat')) {
    errors.hazmat = "Missing";
  } else if (typeof manifest.hazmat !== 'boolean') {
    errors.hazmat = "Invalid";
  }
  return errors;
}
function processManifest(manifest) {
  const errors = validateManifest(manifest);
  const isValid = Object.keys(errors).length === 0;
  const containerId = manifest.hasOwnProperty('containerId') ? manifest.containerId : undefined;

  if (isValid) {
    const normalized = normalizeUnits(manifest);
    console.log(`Validation success: ${containerId}`);
    console.log(`Total weight: ${normalized.weight} kg`);
  } else {
    console.log(`Validation error: ${containerId}`);
    console.log(errors);
  }
}