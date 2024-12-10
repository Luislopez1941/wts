class ApiService {
  constructor(baseURL = 'http://localhost:3001/api/') {
    this.baseURL = baseURL;
  }

  async request(method, url, data, config) {
    const response = await fetch(this.baseURL + url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...config?.headers, // Añadir configuraciones adicionales
      },
      body: data ? JSON.stringify(data) : undefined,
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }

  get(path, config) {
    return this.request('GET', path, undefined, config);
  }

  post(path, data, config) {
    return this.request('POST', path, data, config);
  }

  put(path, data, config) {
    return this.request('PUT', path, data, config);
  }
}

export default new ApiService();
