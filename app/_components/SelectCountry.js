import { getCountry } from "../_lib/apiSettings";

async function SelectCountry({nationality}) {
  const countries = await getCountry();

  return (
    <div className="flex flex-col gap-2">
      <select className="py-2 px-2 outline-none" id="nationality" name="nationality" defaultValue={nationality}>
        <option value="">Select Country</option>
        {countries.map((country) => (
          <option key={country.name.common} value={country.name.common} id="nationality" name="nationality">
            {country.name.common}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectCountry;
