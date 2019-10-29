function distance(first, second){
	//TODO: implementați funcția
	// TODO: implement the function

	
	if(Array.isArray(first) && Array.isArray(second))
	{
		const firstSet = new Set(first);
		const secondSet = new Set(second);

		first = [];
		second = [];

		first = [...firstSet];
		second = [...secondSet];

		distance = 0;
		
		if(first.length ==0 && second.length == 0)
			return 0;

		for(var i = 0; i < first.length; i++)
		{	
			for(var j = 0; j < second.length; j++)
			{
				if((first[i] !== second[j]) && (typeof(first[i]) == typeof(second[j])))
					distance++;
				if((first[i] !== second[j]) && (typeof(first[i]) != typeof(second[j])))
					distance = distance + 2;	
			}
		
		}
			return distance;	
	}	else
		{
			throw new Error('InvalidType');
		}

}


module.exports.distance = distance