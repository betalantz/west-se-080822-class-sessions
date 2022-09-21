describe 'Anagram' do 
  describe '.new' do
    it 'has an initialize method that takes in a word' do
      expect { Anagram.new('listen') }.not_to raise_error
    end
  end

  describe '#match' do
    it 'detects no matches' do
      diaper = Anagram.new('diaper')
      expect(diaper.match(%w[hello world zombies pants dipper])).to eq([])
    end
  
    it 'detects a simple anagram' do
      ba = Anagram.new('ba')
      matches = ba.match(%w[ab abc bac'])
      expect(matches).to eq(['ab'])
    end
  
    it 'detects an anagram' do
      listen = Anagram.new('listen')
      matches = listen.match(%w[enlists google inlets banana])
      expect(matches).to eq(['inlets'])
    end
  
    it 'detects multiple anagrams' do
      allergy = Anagram.new('allergy')
      matches = allergy.match(%w[gallery ballerina regally clergy largely leading])
      expect(matches).to eq(%w[gallery regally largely])
    end
  end

end
