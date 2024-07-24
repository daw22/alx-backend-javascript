export default function guardrail(mathFunction) {
  const queue = [];
  try {
    result.push(mathFunction());
  } catch (e) {
    result.push(e.message);
  } finally {
    result.push('Guardrail was processed');
  }
  return queue;
}
