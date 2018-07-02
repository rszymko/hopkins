require 'rails_helper'

feature 'Dashboard' do
  scenario 'Visit the homepage' do
    visit '/'
    within 'body' do
      expect(page).to have_content("Booker Dashboard")
    end  
  end  
end  