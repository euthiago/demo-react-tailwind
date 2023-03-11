export default ({ className="" }:{ className?:string }) => 
	<div className={"min-h-[150px] p-9 flex align-center "+ className}>
		<div className="m-auto flex flex-col h-full justify-center">
			<div className="text-center font-semibold text-xl">
				Brasília
			</div>
			<div className="text-center text-9xl bold">
				70°
			</div>
			<div className="text-center">
				Parcialmente Nublado
			</div>
		</div>
	</div>

