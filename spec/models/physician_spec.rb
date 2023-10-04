require 'rails_helper'

RSpec.describe Physician, type: :model do
  describe 'Tests for Physician model validation ' do
    subject do
      Physician.new(name: 'Hello',
                    bio: 'This is my first bio',
                    city: 'test city',
                    specialization: 'test specialization',
                    consultation_fee: 200,
                    photo: 'https://dims.healthgrades.com/dims3/MMH/c81d174/2147483647/strip/true/crop/3000x3000+750+0/resize/300x300!/format/webp/quality/75/?url=https%3A%2F%2Fucmscdn.healthgrades.com%2F74%2F8e%2F714c0971403d881ea7b822a4dbcf%2Fgettyimages-1205145301.jpg')
    end
    before { subject.save }

    it 'name should be present' do
      subject.name = nil
      expect(subject).to_not be_valid
    end

    it 'name should not be blank' do
      subject.name = ''
      expect(subject).to_not be_valid
    end

    it 'name should not exceed 250 characters' do
      subject.name = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
             took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries"
      expect(subject).to_not be_valid
    end

    it 'bio time should not be blank' do
      subject.bio = ''
      expect(subject).to_not be_valid
    end

    it 'city time should not be blank' do
      subject.city = ''
      expect(subject).to_not be_valid
    end

    it 'specialization time should not be blank' do
      subject.specialization = ''
      expect(subject).to_not be_valid
    end

    it 'consultaion fee should not be less than 0' do
      subject.consultation_fee = -5
      expect(subject).to_not be_valid
    end

    it 'photo time should not be blank' do
      subject.photo = ''
      expect(subject).to_not be_valid
    end
  end
end
