interface FormInputProps {
    label: string;
    name: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    error?: string;
    placeholder?: string;
    required?: boolean;
    accept?: string;
  }

  export const FormInput = ({
    label,
    name,
    type,
    value,
    onChange,
    error,
    placeholder,
    required = false,
    accept,
  }: FormInputProps) => (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={`bg-gray-600 text-white placeholder:text-gray-300 mt-1 block w-full border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 ${
            error ? 'border-red-500' : ''
          }`}
          placeholder={placeholder}
          rows={3}
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          value={type !== 'file' ? value : undefined}
          onChange={onChange}
          required={required}
          accept={accept}
          className={`bg-gray-600 text-white placeholder:text-gray-300 mt-1 block w-full border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 ${
            error ? 'border-red-500' : ''
          }`}
          placeholder={placeholder}
        />
      )}
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
