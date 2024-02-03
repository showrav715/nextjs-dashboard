'use server'; // Use 'client' for Next.js API routes

async function createInvoice(prevState: any, formData: FormData) {
  try {
    const response = await fetch('http://localhost/custom/hyip-custom/api/test', {
      method: 'POST',
      body: formData, // Send the entire FormData object
    });

    const data = await response.json();

    if (data.error) {
      return flattenErrors(data.error);
    } else {
      return data;
    }
  } catch (error) {
    console.error('Error:', error);
    throw error; // Re-throw for further handling
  }
}

  const flattenErrors = (errorObj: any) => {
    const flattenedErrors: any = {};
    for (const field in errorObj) {
      flattenedErrors[field] = errorObj[field][0];
    }
    return flattenedErrors;
  };


  


export { createInvoice };
