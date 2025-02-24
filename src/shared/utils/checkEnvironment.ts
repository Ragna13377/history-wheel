export const checkEnvironment = () => {
	if (typeof window !== 'undefined') {
		console.log('Компонент рендерится на клиенте');
	} else {
		console.log('Компонент рендерится на сервере');
	}
};
